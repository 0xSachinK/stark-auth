"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  List,
  ListItem,
  Select,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

export default function UseCases() {
  return (
    <Center
      width={450}
      height="100vh"
      display="flex"
      flexDirection="column"
      mx="auto"
    >
      <HStack mt={20} mb={10} spacing={10}>
        <Link href="/">Home</Link>
        <Link href="/use-cases">About</Link>
      </HStack>

      <VStack mb="30" alignItems="center">
        <Heading>Stark Wallet</Heading>
        <Text>Brings Web2 Auth to the Web3 world</Text>
      </VStack>

      <VStack alignItems="center" width="100%" mt={10} mb={100}>
        <Heading as="h3" size="md">
          Issues with current Web3 wallet
        </Heading>
        <UnorderedList>
          <ListItem>
            Require users to understand the concept of public and private key.
          </ListItem>
          <ListItem>
            Users have to remember long and weird private keys or seed phrases.
          </ListItem>
          <ListItem>
            Current account recovery methods are very difficult and hacky.
          </ListItem>
        </UnorderedList>
        <br></br>
        <Text></Text>
        <Heading as="h3" size="md">
          Stark Wallet As a Solution
        </Heading>
        <UnorderedList>
          <ListItem>
            Provides web2 auth flow to users to control their account contracts.
          </ListItem>
          <ListItem>
            Users have to only remember their password to control their
            accounts.
          </ListItem>
          <ListItem>
            Provides easy, secure and fast way to recover accounts.
          </ListItem>
        </UnorderedList>
        <br></br>
        <Heading as="h3" size="md">
          Further Improvements
        </Heading>
        <UnorderedList>
          <ListItem>
            Implement a ZK-SNARK Groth16 verifier in Cairo (Biggest possible
            improvement).
          </ListItem>
          <ListItem>
            Add 2FA to make it the authentication more secure.
          </ListItem>
          <ListItem>
            Add as plugin to argent account contract to enhance functionality.
          </ListItem>
        </UnorderedList>
      </VStack>
    </Center>
  );
}
