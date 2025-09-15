'use client'

import {
  Button,
  CloseButton,
  createListCollection,
  Dialog,
  Field,
  Fieldset,
  Input,
  Portal,
  Select
} from "@chakra-ui/react"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { queryClient } from "../lib/tankstack-client"
import { createImc } from "../lib/api/create-imc"

interface AddImcProps {
  open: boolean
  onClose: () => void
}

const createImcSchema = z.object({
  userId: z.string(),
  height: z.number(),
  weight: z.number()
})

type CreateImcSchema = z.infer<typeof createImcSchema>

const alunos = createListCollection({
  items: [
    { label: "Gustavo", value: "06B2433E-F36B-1410-87C7-0057DDF63E2F" },
    { label: "Pedro", value: "2" },
    { label: "João", value: "3" },
  ],
})

export function AddImc({ open, onClose }: AddImcProps) {
  const { register, handleSubmit } = useForm<CreateImcSchema>({
    defaultValues: {
      height: 0,
      weight: 0,
      userId: ''
    }
  })
  const { mutateAsync } = useMutation({
    mutationFn: createImc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['imcs'] })
      onClose()
    }
  })

  const handleImc = async ({ userId, height, weight }: CreateImcSchema) => {
    mutateAsync({
      userId,
      height: Number(height),
      weight: Number(weight)
    })
  }

  return (
    <Dialog.Root lazyMount open={open}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title color='gray.900'>Adicionar avaliação</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <form onSubmit={handleSubmit(handleImc)}>
                <Fieldset.Root size="lg" maxW="xl">
                  <Fieldset.Content>
                    <Field.Root>
                      <Select.Root collection={alunos} {...register('userId')}>
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
                            {alunos.items.map((student) => (
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
                      <Input {...register('height')} />
                    </Field.Root>

                    <Field.Root color='gray.900'>
                      <Field.Label>Peso</Field.Label>
                      <Input {...register('weight')} />
                    </Field.Root>
                  </Fieldset.Content>

                  <Button type="submit" w='full'>
                    Cadastrar
                  </Button>
                </Fieldset.Root>
              </form>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}
