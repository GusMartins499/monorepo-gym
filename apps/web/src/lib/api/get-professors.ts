import { clientAPI } from "../client-axios"

interface GetProfessorsResponse {
  id: string
  name: string
}

export async function getProfessors() {
  const response = await clientAPI.get<GetProfessorsResponse[]>('/users/professors')

  return response.data
}
