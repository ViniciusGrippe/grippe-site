import React from 'react';
import { BiBookBookmark } from 'react-icons/bi';

import { NextPage } from 'next';
import useSWR from 'swr';

import { FooterComponent } from '~/components/footer';
import { HeaderComponent } from '~/components/header';
import { fetcher } from '~/config/api';
import {
  Box,
  Button,
  Card,
  Container,
  ImageCard,
  Stack,
  Text,
} from '~/styles/global';

const Portfolio: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <div>
        <Container>
          <Stack padding={'40px 0px'}>
            <Stack direction={'row'} spacing={'10px'} alignItems={'center'}>
              <BiBookBookmark size="1.4rem" />
              <Text variant="title">Portfolio</Text>
            </Stack>
            <Text gutter="20px">
              Here are some of the my jobs and works in live.
            </Text>

            <Stack direction={'row'} wrap={'wrap'} spacing="20px">
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_m2.png" />
                <Box>
                  <Text variant="title">M2Data</Text>
                  <Text>
                    Institutional website. M2Data is a company that offer
                    connectivity managed for business.
                  </Text>
                </Box>
                <a
                  href="https://m2data-site.host.zukt.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_best.png" />
                <Box>
                  <Text variant="title">Best Intercâmbios</Text>
                  <Text>
                    Institutional website. Best Intercâmbio is a agency to
                    students realize your dreams of exchange
                  </Text>
                </Box>
                <a
                  href="http://best-site.host.zukt.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_wrge.png" />
                <Box>
                  <Text variant="title">WRGE</Text>
                  <Text>
                    Institutional website. A builder and engineering company to
                    high society with visual is mimalist.
                  </Text>
                </Box>
                <a
                  href="http://wrgeconstrucao.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_cvn.png" />
                <Box>
                  <Text variant="title">CV Notícias</Text>
                  <Text>
                    Newspaper website. Campo Verde Notícias is a news`s portal
                    of Mato Grosso.
                  </Text>
                </Box>
                <a
                  href="https://campoverdenoticias.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_delivery.png" />
                <Box>
                  <Text variant="title">Delivery System</Text>
                  <Text>
                    A plataform for restaurants or similars manage their orders
                    and control the delivery organization.
                  </Text>
                </Box>
                <a
                  href="https://weeke-delivery-painel.vercel.app/orders"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_weeke.png" />
                <Box>
                  <Text variant="title">Weeke Franquias</Text>
                  <Text>
                    Landingpage Campaign. This site shows the benefits of being
                    a franchisee
                  </Text>
                </Box>
                <a
                  href="https://franquias.weeke.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_metha.png" />
                <Box>
                  <Text variant="title">Colégio Metha</Text>
                  <Text>
                    Institutional website. This is a school`s website to show
                    teaching quality.
                  </Text>
                </Box>
                <a
                  href="https://colegiometha.com.br"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_zukt.png" />
                <Box>
                  <Text variant="title">Zukt Labs</Text>
                  <Text>
                    Institutional website. It`s a website to showcases and shows
                    what the company does in the market.
                  </Text>
                </Box>
                <a
                  href="http://zuktlabs-site.host.zukt.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_agro.png" />
                <Box>
                  <Text variant="title">Agroplus</Text>
                  <Text>
                    Stream website. Agroplus is a stream plataform of video
                    content, similar to Netflix, Amazon e etc.
                  </Text>
                </Box>
                <a
                  href="http://agroplus-site.host.zukt.cloud"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_dash.png" />
                <Box>
                  <Text variant="title">Dash</Text>
                  <Text>
                    Institutional website. Dash is interior design`s company,
                    the site has the purpose to showcase of builds.
                  </Text>
                </Box>
                <a
                  href="https://www.figma.com/proto/1xqGiQ42WmT4m6PiMQC7mA/Dash?page-id=0%3A1&node-id=2%3A2&viewport=299%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=2%3A2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>See Prototype</Button>
                </a>
              </Card>

              <Card
                as={Stack}
                spacing="15px"
                width={[
                  '0 1 calc(50% - 52px)',
                  '0 1 calc(50% - 52px)',
                  '0 1 100%',
                  '0 1 100%',
                ]}
              >
                <ImageCard loading="lazy" src="/img/thumb_ecommerce.png" />
                <Box>
                  <Text variant="title">e-Commerce System</Text>
                  <Text>
                    A system from marketplaces manage their products and orders.
                    Credentials to acess: <br />
                    E-mail: tech@zukt.com.br
                    <br />
                    Password: 123123
                  </Text>
                </Box>
                <a
                  href="https://zcommerce-painel.pages.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Live Demo</Button>
                </a>
              </Card>
            </Stack>
          </Stack>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
};

export default Portfolio;
