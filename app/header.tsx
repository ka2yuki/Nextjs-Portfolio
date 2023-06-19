"use client";

import Link from 'next/link';
import Image from 'next/image';
import { GridItem, Stack } from '@chakra-ui/react';
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
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg" alt="Next.js Logo"
          width={180} height={37} priority
        />
      </Link>
      <nav className="p-2">
        <Stack as={'ul'} direction={'row'} spacing='24px'
          style={listStyle}
        >
          {/* <ul className="flex items-center space-x-2"> */}
          <li>
            <Link href="/">
              <Button colorScheme='teal' variant='outline'>
                HOME
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button colorScheme='teal' variant='outline'>
                About
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              {/* <Button  className='bg-sky-500'> */}
              <Button colorScheme='teal' variant={'outline'}>
                Works
              </Button>
            </Link>
          </li>
          {/* </ul> */}
        </Stack>
      </nav>
    </GridItem>
  );
};

export default header;