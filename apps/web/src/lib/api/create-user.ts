import { USER_ROLE } from "../../app/utils/user-role"
import { clientAPI } from "../client-axios"

interface CreateUserProps {
  name: string
  username: string
  password: string
  role: USER_ROLE
  professorId: string | null
}

interface CreateUserResponse {
  name: string
  username: string
  password: string
  status: string
  role: USER_ROLE
}

export async function createUser({ name, username, password, role, professorId }: CreateUserProps) {
  const response = await clientAPI.post<CreateUserResponse>('/users', {
    name,
    username,
    password,
    role,
    professorId
  })

  return response.data
}