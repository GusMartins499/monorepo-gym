import { clientAPI } from "../client-axios"

interface CreateImcProps {
  userId: string
  weight: string
  height: string
}

interface CreateImcResponse {
  id: string
  height: number
  weight: number
  imc: number
  classification: string
  idUserIMC: string
  createdAt: string
}

export async function createImc({ userId, height, weight }: CreateImcProps) {
  const response = await clientAPI.post<CreateImcResponse>('/imc', {
    userId,
    height,
    weight
  })

  return response.data
}