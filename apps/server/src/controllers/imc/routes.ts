import { Router } from "express";
import { verifyJWT } from "../../middleware/verify-jwt";
import { findByUserId } from "./find-by-user-id";
import { requireProfessorOrAdmin } from "../../middleware/require-professor-or-admin";
import { createImc } from "./create";
import { updateImc } from "./update";

const imcRoutes: Router = Router();

imcRoutes.post('/', verifyJWT, requireProfessorOrAdmin, createImc)
imcRoutes.put('/:id', verifyJWT, requireProfessorOrAdmin, updateImc)
imcRoutes.get('/:id', verifyJWT, findByUserId)

export { imcRoutes }
