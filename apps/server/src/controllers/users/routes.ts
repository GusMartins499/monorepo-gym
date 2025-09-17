import { Router } from "express";
import { createUserRoute } from "./create-user";
import { authenticateUser } from "./authenticate-user";
import { verifyJWT } from "../../middleware/verify-jwt";
import { requireProfessorOrAdmin } from "../../middleware/require-professor-or-admin";
import { updateUserRoute } from "./update-user";
import { requireAdmin } from "../../middleware/require-admin";
import { deleteUserRoute } from "./delete-user";
import { findStudents } from "./find-students";
import { findUsers } from "./find";
import { patchUser } from "./patch-user";
import { findProfessors } from "./find-professors";

const usersRoutes: Router = Router();

usersRoutes.post('/', verifyJWT, requireProfessorOrAdmin, createUserRoute)
usersRoutes.put('/:id', verifyJWT, requireProfessorOrAdmin, updateUserRoute)
usersRoutes.delete('/:id', verifyJWT, requireAdmin, deleteUserRoute)
usersRoutes.post('/authenticate', authenticateUser)
usersRoutes.get('/students', verifyJWT, requireProfessorOrAdmin, findStudents)
usersRoutes.get('/', verifyJWT, requireAdmin, findUsers)
usersRoutes.patch('/:id', verifyJWT, requireAdmin, patchUser)
usersRoutes.get('/professors', verifyJWT, requireAdmin, findProfessors)

export { usersRoutes }