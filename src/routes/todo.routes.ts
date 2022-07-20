import { Router, Request , Response } from 'express'
import { CreateTodoController } from '../controllers/todo/CreateTodoController';
import { EndTodoController } from '../controllers/todo/EndTodoController';
import { tokenAuthentication } from '../middlewares/tokenAuthentication';

const todoRoutes = Router();

todoRoutes.post("/create", tokenAuthentication, async (request: Request, response: Response) => {
  return CreateTodoController(request, response);
});

todoRoutes.patch("/end/:todoId", tokenAuthentication, async (request: Request, response: Response) => {
  return EndTodoController(request, response);
});

export { todoRoutes }