import { z } from "zod/v4";
import { IMC_CLASSFICATION } from "../utils/constants";

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
type CreateImcRequestBodySchema = z.infer<typeof createImcRequestBodySchema>

export {
  createImcSchema,
  CreateImcDTO,
  createImcRequestBodySchema,
  CreateImcRequestBodySchema
}