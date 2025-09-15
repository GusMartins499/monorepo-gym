import { Router } from "express";
import { createUserRoute } from "./create-user";
import { authenticateUser } from "./authenticate-user";
import { verifyJWT } from "../../middleware/verify-jwt";
import { requireProfessorOrAdmin } from "../../middleware/require-professor-or-admin";
import { updateUserRoute } from "./update-user";
import { requireAdmin } from "../../middleware/require-admin";
import { deleteUserRoute } from "./delete-user";
import { findUsers } from "./find";

const usersRoutes: Router = Router();

usersRoutes.post('/', verifyJWT, requireProfessorOrAdmin, createUserRoute)
usersRoutes.put('/:id', verifyJWT, requireProfessorOrAdmin, updateUserRoute)
usersRoutes.delete('/:id', verifyJWT, requireAdmin, deleteUserRoute)
usersRoutes.post('/authenticate', authenticateUser)
usersRoutes.get('/students', verifyJWT, requireProfessorOrAdmin, findUsers)

export { usersRoutes }