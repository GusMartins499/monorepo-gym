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
import { SignOutButton } from './sign-out-button'

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

        <SignOutButton />
      </Flex>
    </Box>
  )
}