import { Router } from 'express'
import { userRoutes } from './user.routes';
import { todoRoutes } from './todo.routes';

const routes = Router();

routes.use("/user", userRoutes)
routes.use("/todo", todoRoutes)

export { routes };