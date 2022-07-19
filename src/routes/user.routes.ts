import { Router, Request , Response } from 'express'
import { CreateUserController } from '../controllers/user/CreateUserController';
import { SessionUserController } from '../controllers/user/SessionUserController';

const userRoutes = Router();

userRoutes.post("/signup", async (request, response) => {
  return CreateUserController(request, response);
});

userRoutes.get("/session/:email/:password", async (request, response) => {
  return SessionUserController(request, response);
});

export { userRoutes };