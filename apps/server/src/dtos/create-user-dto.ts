import { z } from 'zod/v4';
import { USER_STATUS } from '../database/entity/User';
import { USER_ROLE } from '../utils/constants';

const createUserSchema = z.object({
  name: z.string()
    .min(4, 'Nome deve ter pelo menos 2 caracteres')
    .max(60, 'Nome deve ter no máximo 60 caracteres'),
  username: z.string()
    .min(3, 'Usuário deve ter pelo menos 3 caracteres')
    .max(60, 'Usuário deve ter no máximo 60 caracteres'),
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  role: z.enum(USER_ROLE, {
    error: () => ({ message: 'Perfil deve ser ADMIN, STUDENT ou PROFESSOR' })
  }),
  status: z.enum(USER_STATUS, {
    error: () => ({ message: 'Status deve ser ACTIVE ou INACTIVE' })
  }).default(USER_STATUS.ACTIVE),
  professorId: z.string()
});

const updateUserSchema = z.object({
  name: z.string()
    .min(4, 'Nome deve ter pelo menos 2 caracteres')
    .max(60, 'Nome deve ter no máximo 60 caracteres'),
  username: z.string()
    .min(3, 'Usuário deve ter pelo menos 3 caracteres')
    .max(60, 'Usuário deve ter no máximo 60 caracteres')
})

type CreateUserDTO = z.infer<typeof createUserSchema>
type UpdateUserDTO = z.infer<typeof updateUserSchema>

export {
  createUserSchema,
  CreateUserDTO,
  updateUserSchema,
  UpdateUserDTO
}