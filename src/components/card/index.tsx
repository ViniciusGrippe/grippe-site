import React from 'react';

import { Avatar, Box, Card, Dot, Stack, Tag, Text } from '~/styles/global';

const CardComponent = ({ data }: any) => {
  return (
    <Card as={Stack} direction={['row', 'row', 'row', 'column']} spacing="15px">
      <Avatar src={data.image} />
      <Box>
        <Stack
          direction={['row', 'row', 'row', 'column']}
          justifyContent={'space-between'}
          alignItems={['center', 'center', 'center', 'flex-start']}
          spacing="5px"
          padding="5px 0"
        >
          <Text variant="title">{data.name}</Text>
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={'10px'}
            justifyContent={['flex-end', 'flex-end', 'flex-end', 'flex-start']}
          >
            <Dot color="#01EC80" />
            <Text>{data.time}</Text>
          </Stack>
        </Stack>
        <Text variant="subtitle" gutter="10px">
          {data.office}
        </Text>
        <Text gutter="12px">{data.description}</Text>
        <Stack direction={'row'} spacing={'10px'} wrap="wrap">
          {data.skills.map((item: any) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default CardComponent;
