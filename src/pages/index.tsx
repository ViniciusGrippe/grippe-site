import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

import { FooterComponent } from '~/components/footer';
import { HeaderComponent } from '~/components/header';
import { fetcher } from '~/config/api';
import { Button, Container, Stack, Text } from '~/styles/global';

const Index: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <div>
        <Container>
          <Stack
            padding={'40px 0px'}
            alignItems={'center'}
            justifyContent={'center'}
            style={{ height: 'calc(100vh - 240px)' }}
          >
            <Text style={{ fontSize: 50 }}>👋</Text>
            <Text variant="title" gutter="15px">
              Hi, I am Vinícius
            </Text>
            <Text textAlign={'center'} gutter="20px">
              I am 25 years old, I am from Brazil and I am web developer and
              UX/UI designer. It{"'"}s a pleasure to meet you!
            </Text>
            <Stack
              direction={'row'}
              spacing={'15px'}
              justifyContent={'center'}
              style={{ flex: 0 }}
            >
              <Link href="/portfolio">
                <Button>View Portfolio</Button>
              </Link>
              <a
                href="http://wa.me/+5565998091459"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Get in touch</Button>
              </a>
            </Stack>
          </Stack>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

export default Index;
