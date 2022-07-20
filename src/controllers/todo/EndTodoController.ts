import { Request, Response } from "express";
import Todo from "../../schemas/todo";

async function EndTodoController(request: Request, response: Response){
  const { endTodo, description } = request.body;
  const { todoId } = request.params;

  const updateTodo = {
    endTodo,
    description
  }

  console.log(updateTodo)

  await Todo.findOneAndUpdate(
    { _id: todoId },
    updateTodo
  )
  .then(()=>{
    return response.status(200).send({ message: "Atualizado" });
  })
  .catch(()=>{
    return response.status(500).send({ error: "Ocorreu um erro no servidor, favor tentar dentro de instantes" });
  })

}

export { EndTodoController };