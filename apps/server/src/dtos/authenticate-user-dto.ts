import z from "zod/v4";

const authenticateUserSchema = z.object({
  username: z.string(),
  password: z.string()
})


type AuthenticateUserDto = z.infer<typeof authenticateUserSchema>

export {
  authenticateUserSchema,
  AuthenticateUserDto
}