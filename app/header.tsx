"use client";

import Link from 'next/link';
import { GridItem, Stack } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const header = () => {
  const listStyle = {
    listStyle: 'none',
  };

  return (
    <GridItem pl='2' bg='orange.300' area={'header'}>
      <nav className="p-2">
        <Stack as={'ul'} direction={'row'} spacing='24px'
          style={listStyle}
        >
          {/* <ul className="flex items-center space-x-2"> */}
          <li>
            <Link href="/">
              <Button colorScheme='teal' variant='outline'>
                Button
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
            <Link href="/about">
              {/* <Button  className='bg-sky-500'> */}
              <Button colorScheme='teal' variant={'outline'}>
                About
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