import { Request, Response } from "express";
import Todo from "../../schemas/todo";

async function EditTodoController (request: Request, response: Response){
  const { deadlineTodo, description } = request.body;
  const { todoId } = request.params;

  const updateTodo = {
    deadlineTodo,
    description
  }

  await Todo.findOneAndUpdate(
    { _id: todoId },
    updateTodo
  )
  .then(()=>{
    return response.status(200).send({ message: "Todo atualizada com sucesso" });
  })
  .catch(()=>{
    return response.status(500).send({ error: "Ocorreu um erro no servidor, favor tentar dentro de instantes" });
  })

}

export { EditTodoController };