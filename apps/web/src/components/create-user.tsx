'use client'

import { Fieldset, Field, Input, Button, createListCollection, Select } from "@chakra-ui/react";
import { useForm } from "react-hook-form"
import { z } from "zod/v4";
import { USER_ROLE } from "../app/utils/user-role";
import { zodResolver } from '@hookform/resolvers/zod';
import { createUser } from "../lib/api/create-user";
import { useMutation } from "@tanstack/react-query";
import { useDialogStore } from "../app/store/dialog-store";

const userRoles = createListCollection({
  items: [
    { label: "Administrador", value: USER_ROLE.ADMIN },
    { label: "Professor", value: USER_ROLE.PROFESSOR },
    { label: "Aluno", value: USER_ROLE.STUDENT },
  ],
})

const createUserSchema = z.object({
  name: z.string()
    .min(4, 'Nome deve ter pelo menos 4 caracteres')
    .max(60, 'Nome deve ter no máximo 60 caracteres'),
  username: z.string()
    .min(3, 'Usuário deve ter pelo menos 3 caracteres')
    .max(60, 'Usuário deve ter no máximo 60 caracteres'),
  password: z.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres'),
  role: z.enum(USER_ROLE),
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export function CreateUserForm() {
  const { closeDialog } = useDialogStore()

  const { register, handleSubmit, formState: { errors } } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: '',
      username: '',
      password: '',
    },
  })

  const { mutateAsync } = useMutation({
    mutationFn: createUser,
    onSuccess: () => { closeDialog() }
  })

  const handleCreateUser = ({ name, password, role, username }: CreateUserSchema) => {
    mutateAsync({
      name,
      username,
      password,
      role
    })
  }

  return (
    <form onSubmit={handleSubmit(handleCreateUser)}>
      <Fieldset.Root size="lg" maxW="xl">
        <Fieldset.Content>
          <Field.Root color='gray.900' required>
            <Field.Label>Nome <Field.RequiredIndicator /></Field.Label>
            <Input {...register("name", { required: true })} />
            <span>{errors.name?.message}</span>
          </Field.Root>
          <Field.Root color='gray.900' required>
            <Field.Label>Usuário <Field.RequiredIndicator /></Field.Label>
            <Input {...register("username")} />
            <span>{errors.username?.message}</span>
          </Field.Root>
          <Field.Root color='gray.900' required>
            <Field.Label>Senha <Field.RequiredIndicator /></Field.Label>
            <Input {...register("password")} type='password' />
            <span>{errors.password?.message}</span>
          </Field.Root>
          <Field.Root required>
            <Select.Root collection={userRoles} {...register('role')} required>
              <Select.HiddenSelect />
              <Select.Label color='gray.900'>Perfil de acesso <Field.RequiredIndicator /></Select.Label>

              <Select.Control color='gray.900'>
                <Select.Trigger>
                  <Select.ValueText placeholder="Selecione o perfil" />
                </Select.Trigger>
                <Select.IndicatorGroup>
                  <Select.Indicator />
                </Select.IndicatorGroup>
              </Select.Control>

              <Select.Positioner>
                <Select.Content color='gray.900'>
                  {userRoles.items.map((role) => (
                    <Select.Item item={role} key={role.value}>
                      {role.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
            <span>{errors.role?.message}</span>
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" w='full' bg='blue.500'>
          Cadastrar
        </Button>
      </Fieldset.Root>
    </form>
  )
}