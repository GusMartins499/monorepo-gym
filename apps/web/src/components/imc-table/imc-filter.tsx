'use client'

import { Box, Input, Field, Fieldset, Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { useRouter, useSearchParams } from 'next/navigation';

const filterSchema = z.object({
  name: z.string(),
});

type FilterSchema = z.infer<typeof filterSchema>

export function ImcFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { register, handleSubmit } = useForm<FilterSchema>({
    defaultValues: {
      name: searchParams.get('name') ?? ''
    }
  })

  const handleFilter = ({ name }: FilterSchema) => {
    if (!name.trim()) {
      return router.push('/');
    }
    const params = new URLSearchParams(searchParams);
    params.set('name', name);
    router.push(`/?${params.toString()}`);
  }

  return (
    <Box mb={6} as='form' onSubmit={handleSubmit(handleFilter)}>
      <Fieldset.Root>
        <Fieldset.Content>
          <Flex alignItems={'center'} gap={2}>
            <Field.Root>
              <Input
                {...register('name')}
                placeholder="Filtrar por aluno"
                bg="gray.100"
                border="1px"
                color='gray.900'
                borderColor="blue.200"
              />
            </Field.Root>
            <Flex alignItems={'center'} gap={2}>
              <Field.Root>
                <Button
                  type="submit"
                  bg="blue.500"
                  color='gray.50'
                >
                  Filtrar
                </Button>
              </Field.Root>
            </Flex>
          </Flex>
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  );
}