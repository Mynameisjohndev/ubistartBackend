import { Router, Request , Response } from 'express'
import { CreateUserController } from '../controllers/user/CreateUserController';

const userRoutes = Router();

userRoutes.post("/signup", async (request, response) => {
  return CreateUserController(request, response);
});

export { userRoutes };