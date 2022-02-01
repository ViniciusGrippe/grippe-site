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
            'Acting as a designer to refactor and maintain the company`s products, creating websites with Elementor (WordPress) and front-end development with ReactJS (Typescript).',
          image: '/img/logo_weeke.png',
          skills: ['React JS', 'Elementor WP', 'Typescript'],
        },
        {
          id: 2,
          name: 'Zukt Labs',
          office: 'Front-end and UI/UX Designer',
          time: 'August 2020 – Currently',
          description:
            'Acting as a front-end developer with ReactJS (Typescript) to create custom systems and institutional sites, also acting as a UX/UI designer for prototyping sites and systems.',
          image: '/img/logo_zukt.jpg',
          skills: ['React JS', 'React Native', 'Typescript', 'Figma'],
        },
      ],
    });
  }
);

export default handler;
