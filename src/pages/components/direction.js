import { Box, Flex, Text } from "@chakra-ui/react";

function CardRow({directionHandler}) {  
    return (
      <Flex direction={'row'} justifyContent='space-between' marginTop={'3rem'}>
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="md"
          mr={4}
          cursor="pointer"
          onClick={() => directionHandler(1)}
          _hover={{ borderColor: "gray.300" }}
          _focus={{ borderColor: "blue.500" }}
          transition="border-color 0.2s"
        >
          <Text>Sarah follows the trail of the Donnelly familys business dealings and uncovers a web of corruption and deceit.</Text>
        </Box>
        <Box
          p={4}
          borderWidth="1px"
          borderRadius="md"
          cursor="pointer"
          onClick={() => directionHandler(2)}
          _hover={{ borderColor: "gray.300" }}
          _focus={{ borderColor: "blue.500" }}
          transition="border-color 0.2s"
        >
          <Text>Sarah discovers a shocking secret about the Donnelly familys past that leads her to the killer.</Text>
        </Box>
      </Flex>
    );
  }
  export default CardRow;
  