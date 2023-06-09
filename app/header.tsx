"use client";

import Link from 'next/link';
import Image from 'next/image';
import { GridItem, Heading, Stack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const header = () => {
  const listStyle = {
    listStyle: 'none',
  };
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }

  return (
    <GridItem style={navStyle} pl='2' area={'header'}>
      <Link href={'/'}>
        <Heading>
          Portfolio
        </Heading>
      </Link>
      <nav className="p-2">
        <Stack as={'ul'} direction={'row'} spacing='24px'
          style={listStyle}
        >
          <li>
            <Link href="/">
              <Button colorScheme='gray'>About</Button>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              {/* <Button  className='bg-sky-500'> */}
              <Button colorScheme='gray'>Works</Button>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Button colorScheme='gray'>Contact</Button>
            </Link>
          </li>
        </Stack>
      </nav>
    </GridItem>
  );
};

export default header;