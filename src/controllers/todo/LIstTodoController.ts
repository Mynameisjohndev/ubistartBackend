import { Request, Response } from "express";
import Todo from "../../schemas/todo";

async function ListTodoController (request: Request, response: Response){

  const allTodo= await Todo.find()
  
  if(allTodo){
    return response.status(200).send(allTodo);
  }else{
    return response.status(500).send({ error: "Ocorreu um erro no servidor, favor tentar dentro de instantes" });
  }

}

export { ListTodoController };