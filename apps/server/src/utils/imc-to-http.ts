import dayjs from "dayjs"
import { IMC_CLASSFICATION } from "./constants"
import { mapImcClassificationToLabel } from "./imc-classification"

interface User {
  id: string
  name: string
  username: string
  password: string
  role: string
  status: string
  createdAt: Date
}

interface IMCToHTTP {
  id: string
  height: number
  weight: number
  imc: number
  classification: IMC_CLASSFICATION
  user: User
  idUserIMC: string
  createdAt: Date
}

export function toHTTP(imc: IMCToHTTP) {
  return {
    id: imc.id,
    height: new Intl.NumberFormat("pt-BR", { style: 'decimal', unit: 'meter' }).format(imc.height),
    weight: new Intl.NumberFormat("pt-BR", { style: 'decimal', unit: 'kilogram' }).format(imc.weight),
    imc: new Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(imc.imc),
    classificationLabel: mapImcClassificationToLabel(imc.classification),
    classification: imc.classification,
    createdAt: dayjs(imc.createdAt).format('DD/MM/YYYY'),
    student: imc.user ? imc.user.name : null,
    studentId: imc.user ? imc.user.id : null
  }
}