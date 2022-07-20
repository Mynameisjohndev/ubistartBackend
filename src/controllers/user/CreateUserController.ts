
import { hash } from "bcrypt";
import { Request, Response } from "express";
import User from '../../schemas/user';

interface IUserSignup{
  email: string;
  password: string;
}

async function CreateUserController(request: Request, response: Response) {
  let { email, password } : IUserSignup = request.body;

  if(!email){
    return response.status(401).send({error: "Informe um e-mail para cadastrar"})
  }

  if(!password){
    return response.status(401).send({error: "Informe uma senha para cadastrar"})
  }

  let userExists = await User.findOne({ email })

  if(userExists){
    return response.status(401).send({error: "Usuário já existe na base de dados!"})
  }
  
  let protectedPassword = await hash(password,8);

  let user = {
    email,
    password: protectedPassword,
  };

  User.create(user)
  .then(()=>{
    return response.status(201).send({user})
  }).catch(()=>{
    return response.status(500).send({error: "Tente criar sua conta dentro de instantes"})
  })


}

export { CreateUserController, IUserSignup };