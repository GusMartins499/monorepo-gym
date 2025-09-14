import { Router } from "express";
import { createUserRoute } from "./create-user";
import { authenticateUser } from "./authenticate-user";

const usersRoutes: Router = Router();

usersRoutes.post('/', createUserRoute)
usersRoutes.post('/authenticate', authenticateUser)

export { usersRoutes }