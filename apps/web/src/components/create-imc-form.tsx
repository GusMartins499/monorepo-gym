'use client'

import { Fieldset, Field, Select, Input, Button, createListCollection } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4"
import { useMemo } from "react";
import { createImc } from "../lib/api/create-imc";
import { getStudents } from "../lib/api/get-users";
import { queryClient } from "../lib/tankstack-client";
import { useDialogStore } from "../app/store/dialog-store";

const createImcSchema = z.object({
  userId: z.string(),
  height: z.string(),
  weight: z.string()
})

type CreateImcSchema = z.infer<typeof createImcSchema>

export function CreateImcForm() {
  const { closeDialog } = useDialogStore()

  const { register, handleSubmit } = useForm<CreateImcSchema>({
    defaultValues: {
      height: '',
      weight: '',
      userId: ''
    }
  })

  const { data: studentsList, isLoading: isLoadingStudents } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
  })

  const { mutateAsync } = useMutation({
    mutationFn: createImc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['imcs'] })
    }
  })


  const collection = useMemo(() => {
    return createListCollection({
      items: studentsList?.map(({ id, name }) => ({ label: name, value: id })) ?? [],
    })
  }, [studentsList])

  const handleImc = async ({ userId, height, weight }: CreateImcSchema) => {
    mutateAsync({
      userId,
      height,
      weight
    })
    closeDialog()
  }
  return (
    <form onSubmit={handleSubmit(handleImc)}>
      <Fieldset.Root size="lg" maxW="xl">
        <Fieldset.Content>
          <Field.Root>
            <Select.Root collection={collection} {...register('userId')} disabled={isLoadingStudents}>
              <Select.HiddenSelect />
              <Select.Label color='gray.900'>Aluno</Select.Label>

              <Select.Control color='gray.900'>
                <Select.Trigger>
                  <Select.ValueText placeholder="Selecione o aluno" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>

              <Select.Positioner>
                <Select.Content color='gray.900'>
                  {collection.items.map((student) => (
                    <Select.Item item={student} key={student.value}>
                      {student.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
          </Field.Root>
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
          Cadastrar
        </Button>
      </Fieldset.Root>
    </form>
  )
}