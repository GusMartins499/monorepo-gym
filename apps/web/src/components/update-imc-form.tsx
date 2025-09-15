'use client'

import { Fieldset, Field, Input, Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4"

interface UpdateImcFormProps {
  payload: {
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
}

const updateImcSchema = z.object({
  userId: z.string(),
  height: z.number(),
  weight: z.number()
})

type UpdateImcSchema = z.infer<typeof updateImcSchema>

export function UpdateImcForm({ payload }: UpdateImcFormProps) {
  const { register, handleSubmit } = useForm<UpdateImcSchema>({
    defaultValues: {
      height: 0,
      weight: 0,
      userId: ''
    }
  })

  const handleImc = async ({ userId, height, weight }: UpdateImcSchema) => { }

  return (
    <form onSubmit={handleSubmit(handleImc)}>
      <Fieldset.Root size="lg" maxW="xl">
        <Fieldset.Content>
          <Field.Root color='gray.900'>
            <Field.Label>Altura</Field.Label>
            <Input {...register('height')} />
          </Field.Root>

          <Field.Root color='gray.900'>
            <Field.Label>Peso</Field.Label>
            <Input {...register('weight')} />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" w='full' bg='blue.500'>
          Atualizar
        </Button>
      </Fieldset.Root>
    </form>
  )
}