import {
  Box,
  Flex,
  Button,
  HStack,
  Link as ChakraLink,
  Spacer,
} from '@chakra-ui/react'
import NextLink from "next/link"
import { NavItemUsersPage } from './nav-item-users-page'

export function NavBar() {
  return (
    <Box bg="gray.100" px={8} py={4} shadow="sm" borderBottom="1px" borderColor="gray.200">
      <Flex align="center">
        <HStack>
          <ChakraLink
            asChild
            fontSize="md"
            color="gray.600"
            _hover={{ color: "gray.800", textDecoration: "none" }}
            fontWeight="500"
          >
            <NextLink href="/">Home</NextLink>
          </ChakraLink>
          <NavItemUsersPage />
        </HStack>

        <Spacer />

        <Button
          bg="blue.400"
          color="white"
          size="md"
          borderRadius="md"
          px={6}
          _hover={{ bg: "blue.500" }}
          _active={{ bg: "blue.600" }}
        >
          Sign Out
        </Button>
      </Flex>
    </Box>
  )
}