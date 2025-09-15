import { clientAPI } from "../client-axios"

interface GetImcResponse {
  id: string
  height: string
  weight: string
  imc: string
  classificationLabel: string
  classification: string
  createdAt: string
  student: string
  studentId: string
}

export async function getImcs() {
  const response = await clientAPI.get<GetImcResponse[]>('/imc')

  return response.data
}
