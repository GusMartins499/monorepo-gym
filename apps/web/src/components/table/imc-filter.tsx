'use client'

import { Box, Input, Field, Fieldset, Button, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

const filterSchema = z.object({
  name: z.string(),
});

type FilterSchema = z.infer<typeof filterSchema>

export function ImcFilter() {
  const { register, handleSubmit } = useForm<FilterSchema>({
    defaultValues: {
      name: ''
    }
  })

  const handleFilter = ({ name }: FilterSchema) => { }

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