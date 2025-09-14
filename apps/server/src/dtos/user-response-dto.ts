import { z } from "zod/v4";
import { USER_ROLE, USER_STATUS } from "../database/entity/User";

const userResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  role: z.enum(USER_ROLE),
  status: z.enum(USER_STATUS),
})

type UserResponseDTO = z.infer<typeof userResponseSchema>

export {
  UserResponseDTO
}