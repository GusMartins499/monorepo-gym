'use client'

import {
  Fieldset,
  Field,
  Input,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import { redirect } from 'next/navigation'

const signInForm = z.object({
  username: z.string(),
  password: z.string()
});

type SignInForm = z.infer<typeof signInForm>;

export function LoginForm() {
  const { register, handleSubmit } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const handleSignIn = async (data: SignInForm) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (response.ok) {
      redirect('/')
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Fieldset.Root size="lg" maxW="xl">
        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Usuário</Field.Label>
            <Input {...register('username')} />
          </Field.Root>

          <Field.Root>
            <Field.Label>Senha</Field.Label>
            <Input type="password" {...register('password')} />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" w='full'>
          Entrar
        </Button>
      </Fieldset.Root>
    </form>
  )
}