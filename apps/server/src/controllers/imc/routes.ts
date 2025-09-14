import { Router } from "express";
import { verifyJWT } from "../../middleware/verify-jwt";
import { findByUserId } from "./find-by-user-id";

const imcRoutes: Router = Router();

imcRoutes.get('/:id', verifyJWT, findByUserId)

export { imcRoutes }
