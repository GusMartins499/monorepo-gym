import { clientAPI } from "../client-axios"

interface GetUsersResponse {
  id: string
  name: string
}

export async function getStudents() {
  const response = await clientAPI.get<GetUsersResponse[]>('/users/students')

  return response.data
}
