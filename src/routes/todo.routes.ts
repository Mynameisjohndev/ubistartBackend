import { Router, Request , Response } from 'express'
import { CreateTodoController } from '../controllers/todo/CreateTodoController';
import { tokenAuthentication } from '../middlewares/tokenAuthentication';

const todoRoutes = Router();

todoRoutes.post("/create", tokenAuthentication, async (request: Request, response: Response) => {
  return CreateTodoController(request, response);
});

export { todoRoutes }