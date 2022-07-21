import { Router, Request , Response } from 'express'
import { CreateTodoController } from '../controllers/todo/CreateTodoController';
import { EditTodoController } from '../controllers/todo/EditTodoController';
import { EndTodoController } from '../controllers/todo/EndTodoController';
import { ListTodoController } from '../controllers/todo/LIstTodoController';
import { tokenAuthentication } from '../middlewares/tokenAuthentication';

const todoRoutes = Router();

todoRoutes.post("/create", tokenAuthentication, async (request: Request, response: Response) => {
  return CreateTodoController(request, response);
});

todoRoutes.patch("/edit/:todoId", tokenAuthentication, async (request: Request, response: Response) => {
  return EditTodoController(request, response);
});

todoRoutes.patch("/end/:todoId", tokenAuthentication, async (request: Request, response: Response) => {
  return EndTodoController(request, response);
});

todoRoutes.get("/list/:admin/:owner", tokenAuthentication, async (request: Request, response: Response) => {
  return ListTodoController(request, response);
});

export { todoRoutes }