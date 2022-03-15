import React from 'react';
import { BiCompass } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';

import { NextPage } from 'next';

import CardComponent from '~/components/card';
import { FooterComponent } from '~/components/footer';
import { HeaderComponent } from '~/components/header';
import dataCareers from '~/data/careers';
import dataStudies from '~/data/studies';
import { Container, Stack, Text } from '~/styles/global';

const Index: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <div>
        <Container>
          <Stack padding={'40px 0px'}>
            <Stack direction={'row'} spacing={'10px'} alignItems={'center'}>
              <BiCompass size="1.4rem" />
              <Text variant="title">Career</Text>
            </Stack>
            <Stack padding="20px 0" spacing={'15px'}>
              {dataCareers.map((item: any) => (
                <CardComponent data={item} key={item.id} />
              ))}
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={'10px'} alignItems={'center'}>
            <HiOutlineAcademicCap size="1.4rem" />
            <Text variant="title">Studies</Text>
          </Stack>
          <Stack padding="20px 0" spacing={'15px'}>
            {dataStudies.map((item: any) => (
              <CardComponent data={item} key={item.id} />
            ))}
          </Stack>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

export default Index;
