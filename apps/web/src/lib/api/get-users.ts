import { USER_ROLE } from "../../app/utils/user-role"
import { clientAPI } from "../client-axios"

interface GetUsersResponse {
  id: string
  name: string
  username: string
  role: USER_ROLE,
  status: string
}

export async function getUsers() {
  const response = await clientAPI.get<GetUsersResponse[]>('/users')

  return response.data
}
