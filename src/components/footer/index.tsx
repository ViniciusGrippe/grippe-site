import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { Stack, Container, Text, Box } from '~/styles/global';

import { Footer } from './style';

export const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <Container>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Box>
            <Text>© 2022 Vinícius Grippe</Text>
          </Box>
          <Stack direction={'row'} spacing={'15px'}>
            <a
              href="https://github.com/ViniciusGrippe"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#2E3440' }}
            >
              <BsGithub size="22px" />
            </a>
            <a
              href="https://www.linkedin.com/in/viniciusgrippe/"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#2E3440' }}
            >
              <BsLinkedin size="22px" />
            </a>
          </Stack>
        </Stack>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
