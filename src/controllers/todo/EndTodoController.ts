import { Request, Response } from "express";
import Todo from '../../schemas/todo';


async function EndTodoController(request: Request, response: Response){
  const { endTodo } = request.body;
  const { todoId } = request.params;
  await Todo.findOneAndUpdate(
    { _id: todoId },
    { endTodo }
  )
  .then(()=>{
    return response.status(200).send({ message: "Todo finalizada com sucesso" });
  })
  .catch(()=>{
    return response.status(500).send({ error: "Ocorreu um erro no servidor, favor tentar dentro de instantes" });
  })
}

export { EndTodoController };