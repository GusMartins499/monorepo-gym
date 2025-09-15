'use client'

import {
  Box,
  Flex,
  Button,
  HStack,
  Link,
  Spacer,
} from '@chakra-ui/react'

export function NavBar() {
  return (
    <Box bg="white" px={8} py={4} shadow="sm" borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <HStack ml={12}>
          <Link
            fontSize="md"
            color="gray.600"
            _hover={{ color: "gray.800", textDecoration: "none" }}
            fontWeight="500"
          >
            Avaliações
          </Link>
        </HStack>

        <Spacer />

        <Button
          bg="pink.400"
          color="white"
          size="md"
          borderRadius="md"
          px={6}
          _hover={{ bg: "pink.500" }}
          _active={{ bg: "pink.600" }}
        >
          Sign Out
        </Button>
      </Flex>
    </Box>
  )
}