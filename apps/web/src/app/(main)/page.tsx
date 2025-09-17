import { Box, Text } from "@chakra-ui/react";
import { ImcTable } from "../../components/imc-table/imc-table";

export default function Home() {
  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="lg"
      p={6}
      maxW="800px"
      mx="auto"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="center" color="gray.700">
        Avaliações de IMC
      </Text>
      <ImcTable />
    </Box>
  )
}
