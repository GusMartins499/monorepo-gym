'use client'

import {
  Fieldset,
  Field,
  Input,
  Button,
  Box,
  Flex,
  Heading,
  Stack,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import { redirect } from 'next/navigation'
import { useLocalStorage } from '../hooks/use-local-store'
import { useAuthStore } from '../app/store/auth'
import { toaster } from './ui/toaster'

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
    const responseJSON = await response.json()

    if (!response.ok) {
      return toaster.error({ description: responseJSON.error, type: "error" })
    }
    setToken(responseJSON.token);
    setUser({ id: responseJSON.id, role: responseJSON.role })
    redirect('/');
  }

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Box
        as="form"
        onSubmit={handleSubmit(handleSignIn)}
        bg="white"
        p={8}
        rounded="xl"
        boxShadow="lg"
        w="full"
        maxW="md"
      >
        <Stack>
          <Heading size="lg" textAlign="center" color="gray.700">
            Acessar Sistema
          </Heading>
          <Fieldset.Root size="lg" maxW="xl">
            <Field.Root>
              <Fieldset.Content>
                <Field.Root>
                  <Field.Label>Usuário</Field.Label>
                  <Input {...register('username')} placeholder="Digite seu usuário" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Senha</Field.Label>
                  <Input type='password' {...register('password')} />
                </Field.Root>
              </Fieldset.Content>
            </Field.Root>
            <Button type="submit" bg='blue.500' size="lg" w="full">
              Entrar
            </Button>
          </Fieldset.Root>
        </Stack>
      </Box>
    </Flex>
  )
}