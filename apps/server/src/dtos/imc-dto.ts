import { z } from "zod/v4";
import { IMC_CLASSFICATION } from "../utils/constants";

const updateImcSchema = z.object({
  height: z.coerce.number(),
  weight: z.coerce.number(),
  classification: z.enum(IMC_CLASSFICATION),
  imc: z.number(),
})

const updateImcRequestBodySchema = z.object({
  height: z.coerce.number(),
  weight: z.coerce.number(),
})

const createImcRequestBodySchema = z.object({
  height: z.coerce.number(),
  weight: z.coerce.number(),
  userId: z.string()
})

const createImcSchema = z.object({
  height: z.coerce.number(),
  weight: z.coerce.number(),
  classification: z.enum(IMC_CLASSFICATION),
  imc: z.number(),
  userId: z.string()
})

type CreateImcDTO = z.infer<typeof createImcSchema>
type updateImcDTO = z.infer<typeof updateImcSchema>
type CreateImcRequestBodySchema = z.infer<typeof createImcRequestBodySchema>
type UpdateImcRequestBodySchema = z.infer<typeof updateImcRequestBodySchema>

export {
  createImcSchema,
  CreateImcDTO,
  createImcRequestBodySchema,
  CreateImcRequestBodySchema,
  updateImcRequestBodySchema,
  UpdateImcRequestBodySchema,
  updateImcSchema,
  updateImcDTO
}