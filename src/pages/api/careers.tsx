import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>({}).get(
  async (req, res) => {
    res.json({
      data: [
        {
          id: 1,
          name: 'Weeke Manager',
          office: 'UI/UX Designer and Front-end',
          time: 'July 2020 – Currently',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          image: '/img/logo_weeke.png',
          skills: ['React JS', 'Elementor WP', 'Typescript'],
        },
        {
          id: 2,
          name: 'Zukt Labs',
          office: 'Front-end and UI/UX Designer',
          time: 'August 2020 – Currently',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          image: '/img/logo_zukt.jpg',
          skills: ['React JS', 'React Native', 'Typescript', 'Figma'],
        },
      ],
    });
  }
);

export default handler;
