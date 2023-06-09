import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Text, Button, Image, Icon, chakra, Stack } from "@chakra-ui/react";

import Navbar from "@/pages/components/header.js";
import Logo from "../../public/logo.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>StanLee GPT</title>
        <meta name="description" content="Generate comic strips at will" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box px={8} py={5} mx="auto">
          <Navbar />
          <Box
            w={{
              base: "full",
              md: 11 / 12,
              xl: 9 / 12,
            }}
            mx="auto"
            textAlign={{
              base: "left",
              md: "center",
            }}
          >
            <chakra.h1
              mb={6}
              fontSize={{
                base: "4xl",
                md: "6xl",
              }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={{
                base: "normal",
                md: "tight",
              }}
              color="gray.900"
              _dark={{
                color: "gray.100",
              }}
            >
              Generate{" "}
              <Text
                display={{
                  base: "block",
                  lg: "inline",
                }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold"
              >
                story and comic strips
              </Text>{" "}
              in minutes!
            </chakra.h1>
            <chakra.p
              px={{
                base: 0,
                lg: 24,
              }}
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              StanLee GPT is GPT and Dall-E powered comic strips generator. Choose a direction to go ahead in story and generate comic strips!
            </chakra.p>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              mb={{
                base: 4,
                md: 8,
              }}
              spacing={2}
              justifyContent={{
                sm: "left",
                md: "center",
              }}
            >
              <Button
                as="a"
                colorScheme="gray"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{
                  base: "full",
                  sm: "auto",
                }}
                mb={{
                  base: 2,
                  sm: 0,
                }}
                size="lg"
                cursor="pointer"
                href='/form'
              >
                Get Started
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
            </Stack>
          </Box>
          <Box
            w={{
              base: "full",
              md: 10 / 12,
            }}
            mx="auto"
            mt={20}
            textAlign="center"
          >
            <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src="https://user-images.githubusercontent.com/54806954/229376700-bb905168-4832-4289-ae52-8c31ef2f43c8.png"
              alt="StanLee GPT Comic"
            />
          </Box>
        </Box>;
      </main>
    </>
  )
}
