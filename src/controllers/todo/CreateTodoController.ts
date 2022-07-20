import { Request, Response } from "express";
import Todo from '../../schemas/todo';

interface ITodoCreate{
  description: string;
  owner: string;
  endTodo: Date;
}

async function CreateTodoController(request: Request, response: Response) {
  let { description, endTodo, owner } : ITodoCreate = request.body;

  if(!description){
    return response.status(401).send({ message: "Você deve informar uma descrição"});
  }

  if(!endTodo){
    return response.status(401).send({ message: "Você deve informar a data para finalizar a todo"});
  }

  if(!owner){
    return response.status(401).send({ message: "Você deve informar uma descrição" });
  }

  Todo.create({ description, endTodo, owner })
  .then(()=>{
    return response.status(201).send( { description, endTodo, owner } );
  })
  .catch(()=>{
    return response.status(500).send({error: "Tente criar sua tarefa dentro de instantes"})
  })

}

export { CreateTodoController, ITodoCreate };