"use client";

import * as React from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js';
import { Grid } from '@chakra-ui/react'
import Header from "./header";

export default function Providers({ 
  children 
}: { 
children: React.ReactNode 
}){
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header />
        <Container as={'main'} maxW='container.sm' color='#262626'>
          {children}
        </Container>
      </ChakraProvider>
    </CacheProvider>
  );
}