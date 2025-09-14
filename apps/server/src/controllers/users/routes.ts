import { Router } from "express";
import { createUserRoute } from "./create-user";
import { authenticateUser } from "./authenticate-user";
import { verifyJWT } from "../../middleware/verify-jwt";
import { requireProfessorOrAdmin } from "../../middleware/require-professor-or-admin";

const usersRoutes: Router = Router();

usersRoutes.post('/', verifyJWT, requireProfessorOrAdmin, createUserRoute)
usersRoutes.post('/authenticate', authenticateUser)

export { usersRoutes }