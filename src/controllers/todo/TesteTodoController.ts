import { Request, Response, NextFunction } from "express";
import Todo from '../../schemas/todo';

function CreateTodoController(request: Request,response: Response){

  let { description, deadlineTodo, owner } = request.body;

  if(!description){
    return response.status(401).send({ message: "Você deve informar uma descrição"});
  }

  if(!owner){
    return response.status(401).send({ message: "Você deve informar seu id" });
  }

  if(!deadlineTodo){
    return response.status(401).send({ message: "Você deve informar a data para finalizar" });
  }

  Todo.create({ description, deadlineTodo, owner })
  .then(()=>{
    return response.status(201).send( { description, deadlineTodo, owner } );
  })
  .catch(()=>{
    return response.status(500).send({error: "Tente criar sua tarefa dentro de instantes"})
  })
}

export { CreateTodoController }