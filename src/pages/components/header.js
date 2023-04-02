import {
    Box,
    Flex
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
            <img
              src="https://kutty.netlify.app/hero.jpg"
              height="10"
              width="150"
              alt="logo"
            ></img>
          </Flex>
        </Flex>
      </Box>
    );
  }