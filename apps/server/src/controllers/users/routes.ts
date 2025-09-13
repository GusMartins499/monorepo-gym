import { Router } from "express";
import { createUserRoute } from "./create-user";

const usersRoutes: Router = Router();

usersRoutes.post('/', createUserRoute)

export { usersRoutes }