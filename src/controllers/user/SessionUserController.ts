
import { compare } from "bcrypt";
import { Request, Response } from "express";
import User from '../../schemas/user';
import { IUserSignup } from "./CreateUserController";

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

  const sessionUser = {
    email: user.email,
    token: ""
  }

  return response.status(200).send(sessionUser);

}

export { SessionUserController };