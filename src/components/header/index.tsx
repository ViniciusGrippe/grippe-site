import React from 'react';
import { RiGlobalLine } from 'react-icons/ri';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Stack, Container, Text, Avatar, Button } from '~/styles/global';

import { Header } from './style';

export const HeaderComponent: React.FC = () => {
  const router = useRouter();

  return (
    <Header>
      <Container>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack spacing="10px" direction={'row'} alignItems={'center'}>
            <Link href="/">
              <Avatar src="/img/avatar_2.png" />
            </Link>
            <Link href="/about">
              <Button
                variant={router.pathname === '/about' ? 'actived' : 'ghost'}
              >
                About
              </Button>
            </Link>
            <Link href="/skills">
              <Button
                variant={router.pathname === '/skills' ? 'actived' : 'ghost'}
              >
                Skills
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant={router.pathname === '/portfolio' ? 'actived' : 'ghost'}
              >
                Portfolio
              </Button>
            </Link>
          </Stack>
          <Stack
            spacing="10px"
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-end'}
          >
            <Button variant="icon" pride>
              🌈
            </Button>
            {/* <Button variant="icon">
              <RiGlobalLine />
            </Button> */}
          </Stack>
        </Stack>
      </Container>
    </Header>
  );
};

export default HeaderComponent;
