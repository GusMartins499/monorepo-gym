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
import { useLocalStorage } from '../hooks/use-local-store'
import { useAuthStore } from '../app/store/auth'

const signInForm = z.object({
  username: z.string(),
  password: z.string()
});

type SignInForm = z.infer<typeof signInForm>;

export function LoginForm() {
  const [_, setToken] = useLocalStorage<string>("token", "");
  const { setUser } = useAuthStore()

  const { register, handleSubmit } = useForm<SignInForm>({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const handleSignIn = async (data: SignInForm) => {
    const response = await fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      return console.error("Erro na autenticação");
    }
    const responseJSON = await response.json()
    setToken(responseJSON.token);
    setUser({ id: responseJSON.id, role: responseJSON.role })
    redirect('/');
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