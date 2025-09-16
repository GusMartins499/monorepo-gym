'use client'

import { Fieldset, Field, Input, Button } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4"
import { updateImc } from "../lib/api/update-imc";
import { queryClient } from "../lib/tankstack-client";
import { useDialogStore } from "../app/store/dialog-store";

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
  height: z.string(),
  weight: z.string()
})

type UpdateImcSchema = z.infer<typeof updateImcSchema>

export function UpdateImcForm({ payload }: UpdateImcFormProps) {
  const { closeDialog } = useDialogStore()

  const { register, handleSubmit } = useForm<UpdateImcSchema>({
    defaultValues: {
      height: payload.height,
      weight: payload.weight,
    }
  })

  const { mutateAsync } = useMutation({
    mutationFn: updateImc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['imcs'] })
    }
  })

  const handleImc = async ({ height, weight }: UpdateImcSchema) => {
    mutateAsync({
      id: payload.id,
      height,
      weight
    })
    closeDialog()
  }

  return (
    <form onSubmit={handleSubmit(handleImc)}>
      <Fieldset.Root size="lg" maxW="xl">
        <Fieldset.Content>
          <Field.Root color='gray.900'>
            <Field.Label>Altura</Field.Label>
            <Input
              {...register("height", {
                setValueAs: (v) =>
                  v === "" ? undefined : Number(String(v).replace(",", "."))
              })}
            />
          </Field.Root>

          <Field.Root color='gray.900'>
            <Field.Label>Peso</Field.Label>
            <Input
              {...register("weight", {
                setValueAs: (v) =>
                  v === "" ? undefined : Number(String(v).replace(",", "."))
              })}
            />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" w='full' bg='blue.500'>
          Atualizar
        </Button>
      </Fieldset.Root>
    </form>
  )
}