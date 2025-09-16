import {
  Box,
  Flex,
  Button,
  HStack,
  Link as ChakraLink,
  Spacer,
} from '@chakra-ui/react'
import NextLink from "next/link"

export function NavBar() {
  return (
    <Box bg="white" px={8} py={4} shadow="sm" borderBottom="1px" borderColor="gray.200">
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