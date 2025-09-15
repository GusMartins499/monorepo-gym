import { Box, Table, Text } from "@chakra-ui/react";
import { NavBar } from "../components/nav-bar";
import { IMCTableRow } from "../components/table/table-row";

const imcData = [
  {
    "id": "1AB2433E-F36B-1410-87C7-0057DDF63E2F",
    "height": 1.67,
    "weight": 88,
    "imc": 31.6,
    "classification": "OBESE_I",
  },
  {
    "id": "1BB2433E-F36B-1410-87C7-0057DDF63E2F",
    "height": 1.67,
    "weight": 78,
    "imc": 28,
    "classification": "OVERWEIGHT",
  },
  {
    "id": "25B2433E-F36B-1410-87C7-0057DDF63E2F",
    "height": 1.67,
    "weight": 88,
    "imc": 31.6,
    "classification": "OBESE_I",
  }
];

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.50">
      <NavBar />

      <Box p={8}>
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

          <Table.Root variant='outline' size="md">
            <Table.Header bg="gray.50">
              <Table.Row>
                <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
                  Altura
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
                  Peso
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
                  IMC
                </Table.ColumnHeader>
                <Table.ColumnHeader textAlign="center" color="gray.600" fontWeight="600">
                  Classificação
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {imcData.map((item) => (
                <IMCTableRow payload={item} />
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  );
}
