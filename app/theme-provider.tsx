"use client";

// import { createContext } from "react";
import * as React from 'react'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

// export const ThemeContext = createContext("");

const { Button } = chakraTheme.components
const theme = extendBaseTheme({
  components: {
    Button,
  },
})

export default function ThemeProvider({ children }) {
  return (
    <ChakraBaseProvider>
      {/* <Grid
        templateAreas={
        `"header header"
        "nav main"
        "nav footer"`}
        // gridTemplateRows={'50px 1fr 30px'}
        // gridTemplateColumns={'150px 1fr'}
        // h='200px'
        gap='1'
        // color='blackAlpha.700'
        fontWeight='bold'
      >  */}
        {children}
      {/* </Grid> */}
    </ChakraBaseProvider>
  );
}