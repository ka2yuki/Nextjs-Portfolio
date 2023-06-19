"use client";

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js';
import { Grid } from '@chakra-ui/react'

export default function Providers({ 
  children 
}: { 
children: React.ReactNode 
}){
  return (
    <CacheProvider>
      <ChakraProvider>
        <Grid
          templateAreas={
          `"header header"
          "nav main"
          "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h='200px'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        > 
        {children}
        </Grid>
      </ChakraProvider>
    </CacheProvider>
  );
}