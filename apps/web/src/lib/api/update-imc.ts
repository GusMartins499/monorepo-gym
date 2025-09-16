import { clientAPI } from "../client-axios"

interface UpdateImcProps {
  id: string
  weight: string
  height: string
}

interface UpdateImcResponse {
  id: string
  height: string
  weight: string
  imc: string
  classificationLabel: string
  classification: string
  createdAt: string
}

export async function updateImc({ id, height, weight }: UpdateImcProps) {
  const response = await clientAPI.put<UpdateImcResponse>(`/imc/${id}`, {
    height,
    weight
  })

  return response.data
}