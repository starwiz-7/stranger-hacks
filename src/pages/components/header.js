import {
    Box,
    Flex,
    chakra
  } from '@chakra-ui/react';
  
  
  export default function WithSubnavigation() {
    return (
      <Box>
        <Flex
          
          color='gray.600'
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 2 }}
          borderStyle={'solid'}
          align={'center'}
        >
          <Flex flex={{ base: 1 }} justify={{ md: 'start' }}>
            <chakra.h3 fontWeight={'bold'} fontSize='xl'> StanLee GPT</chakra.h3>
          </Flex>
        </Flex>
      </Box>
    );
  }