import React from 'react';
import { BsGithub, BsKanban } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import {
  SiAntdesign,
  SiChakraui,
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
import { TiFlashOutline } from 'react-icons/ti';

import { NextPage } from 'next';

import { FooterComponent } from '~/components/footer';
import { HeaderComponent } from '~/components/header';
import {
  Container,
  Button,
  Stack,
  Text,
  Avatar,
  Box,
  Card,
} from '~/styles/global';

const Index: NextPage = () => {
  const [tab, setTab] = React.useState(2);

  return (
    <>
      <HeaderComponent />
      <div>
        <Container>
          <Stack padding={'40px 0px 10px'}>
            <Stack
              direction={'row'}
              spacing={'10px'}
              alignItems={'center'}
              padding="0 0 10px"
            >
              <TiFlashOutline size="1.4rem" />
              <Text variant="title">Skills</Text>
            </Stack>
            <Text gutter="20px">
              Here are some of the tools and knowledge that I use regularly.
            </Text>
            <Stack
              direction={'row'}
              spacing={'10px'}
              width={'100%'}
              padding={'0 20px 20px'}
              style={{ overflowX: 'auto', margin: '0 -20px' }}
            >
              <Button
                variant={tab === 2 ? '' : 'ghost'}
                onClick={() => {
                  setTab(2);
                }}
              >
                All
              </Button>
              <Button
                variant="ghost"
                color={tab === 0 ? 'green' : ''}
                onClick={() => {
                  setTab(0);
                }}
              >
                Web Development
              </Button>
              <Button
                variant="ghost"
                color={tab === 1 ? 'orange' : ''}
                onClick={() => {
                  setTab(1);
                }}
              >
                Web Design
              </Button>
              <Button
                variant="ghost"
                color={tab === 3 ? 'blue' : ''}
                onClick={() => {
                  setTab(3);
                }}
              >
                DevOps
              </Button>
            </Stack>
          </Stack>
          {tab === 0 ? (
            <TabWebDev />
          ) : tab === 1 ? (
            <TabWebDes />
          ) : tab === 3 ? (
            <TabDevOps />
          ) : (
            <Stack spacing={'20px'}>
              <TabWebDes />
              <TabWebDev />
              <TabDevOps />
            </Stack>
          )}
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

const TabWebDev = () => {
  return (
    <Stack direction={'row'} wrap="wrap" spacing="20px">
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <FaReact size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">React JS</Text>
          <Text>Web Development</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiNextdotjs size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">Next JS</Text>
          <Text>Framework front-end</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <FaReact size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">React Native</Text>
          <Text>Web Development</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <IoLogoHtml5 size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">HTML</Text>
          <Text>Web Development</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiJavascript size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">Javascript</Text>
          <Text>Web Development</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#C6F6D5"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiTypescript size="25px" color="#21543D" />
        </Box>
        <Box>
          <Text variant="title">Typescript</Text>
          <Text>Web Development</Text>
        </Box>
      </Card>
    </Stack>
  );
};

const TabWebDes = () => {
  return (
    <Stack direction={'row'} wrap={'wrap'} spacing="20px">
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#FED7D7"
          padding="15px"
          borderRadius={'10px'}
        >
          <IoLogoCss3 size="25px" color="#944748" />
        </Box>
        <Box>
          <Text variant="title">CSS3</Text>
          <Text>Web Design</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#FED7D7"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiAntdesign size="25px" color="#944748" />
        </Box>
        <Box>
          <Text variant="title">Ant design</Text>
          <Text>Material UI</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#FED7D7"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiChakraui size="25px" color="#944748" />
        </Box>
        <Box>
          <Text variant="title">Chakra</Text>
          <Text>Material UI</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        alignItems={'center'}
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
      >
        <Box
          width={'fit-content'}
          background="#FED7D7"
          padding="15px"
          borderRadius={'10px'}
        >
          <SiFigma size="25px" color="#944748" />
        </Box>
        <Box>
          <Text variant="title">Figma</Text>
          <Text>Design Prototyping</Text>
        </Box>
      </Card>
    </Stack>
  );
};

const TabDevOps = () => {
  return (
    <Stack direction={'row'} wrap="wrap" spacing="20px">
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#d1edfd"
          padding="15px"
          borderRadius={'10px'}
        >
          <BsGithub size="25px" color="#1d475f" />
        </Box>
        <Box>
          <Text variant="title">Github</Text>
          <Text>Version control</Text>
        </Box>
      </Card>
      <Card
        as={Stack}
        direction={'row'}
        spacing="15px"
        width={[
          '0 1 calc(50% - 52px)',
          '0 1 calc(50% - 52px)',
          '0 1 100%',
          '0 1 100%',
        ]}
        alignItems={'center'}
      >
        <Box
          width={'fit-content'}
          background="#d1edfd"
          padding="15px"
          borderRadius={'10px'}
        >
          <BsKanban size="25px" color="#1d475f" />
        </Box>
        <Box>
          <Text variant="title">Kanban</Text>
          <Text>DevOps</Text>
        </Box>
      </Card>
    </Stack>
  );
};

export default Index;
