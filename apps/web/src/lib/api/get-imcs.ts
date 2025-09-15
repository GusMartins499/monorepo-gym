import { clientAPI } from "../client-axios"

interface GetImcResponse {
  id: string
  height: number
  weight: number
  imc: number
  classification: string
  idUserIMC: string
  createdAt: string
}

export async function getImcs() {
  const response = await clientAPI.get<GetImcResponse[]>('/imc')

  return response.data
}
