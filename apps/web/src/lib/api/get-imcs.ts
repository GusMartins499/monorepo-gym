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

interface GetImcQuery {
  name?: string | null
}

export async function getImcs({ name = '' }: GetImcQuery) {
  const response = await clientAPI.get<GetImcResponse[]>('/imc', {
    params: {
      search: name
    }
  })

  return response.data
}
