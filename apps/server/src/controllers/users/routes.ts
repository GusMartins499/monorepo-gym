import { Router } from "express";
import { createUserRoute } from "./create-user";
import { authenticateUser } from "./authenticate-user";
import { verifyJWT } from "../../middleware/verify-jwt";
import { requireProfessorOrAdmin } from "../../middleware/require-professor-or-admin";
import { updateUserRoute } from "./update-user";

const usersRoutes: Router = Router();

usersRoutes.post('/', verifyJWT, requireProfessorOrAdmin, createUserRoute)
usersRoutes.put('/:id', verifyJWT, requireProfessorOrAdmin, updateUserRoute)
usersRoutes.post('/authenticate', authenticateUser)

export { usersRoutes }