"use client";

import Link from 'next/link';
import { GridItem } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const header = () => {
  return (
    // <GridItem pl='2' bg='orange.300' area={'header'}>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <img src="/vercel.svg" className="w-32" />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <Button colorScheme='teal' size='lg'>test</Button>
      </nav>
    // </GridItem>
  );
};

export default header;