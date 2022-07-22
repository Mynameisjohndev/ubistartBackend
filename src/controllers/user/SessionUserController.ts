
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";
import User from '../../schemas/user';
import { IUserSignup } from "./CreateUserController";
import dotenv from "dotenv";

dotenv.config();

async function SessionUserController(request: Request, response: Response) {
  let { email, password } = request.params;

  if(!email){
    return response.status(401).send({error: "Informe um e-mail para cadastrar"})
  }

  if(!password){
    return response.status(401).send({error: "Informe uma senha para cadastrar"})
  }

  let user = await User.findOne({ email }) as IUserSignup;
  
  if(!user){
    return response.status(401).send({error: "Sua senha ou email estão incorretos"})
  }
  
  const comparePassword = await compare(password, user.password);

  if (!comparePassword) {
    return response
      .status(401)
      .send({ error: "Sua senha ou email estão incorretos" });
  }
  
  const JWT_ACCESS_TOKEN = `${process.env.JWT_TOKEN}`;

  const token = sign({}, JWT_ACCESS_TOKEN, {
    subject: user.email,
    expiresIn: "365d",
  });

  const sessionUser = {
    email: user.email,
    id: user._id,
    token
  }

  return response.status(200).send(sessionUser);

}

export { SessionUserController };