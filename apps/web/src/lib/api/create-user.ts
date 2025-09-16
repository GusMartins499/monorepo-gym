import { USER_ROLE } from "../../app/utils/user-role"
import { clientAPI } from "../client-axios"

interface CreateUserProps {
  name: string
  username: string
  password: string
  role: USER_ROLE
}

interface CreateUserResponse {
  name: string
  username: string
  password: string
  status: string
  role: USER_ROLE
}

export async function createUser({ name, username, password, role }: CreateUserProps) {
  const response = await clientAPI.post<CreateUserResponse>('/users', {
    name,
    username,
    password,
    role
  })

  return response.data
}