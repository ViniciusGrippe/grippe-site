import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>({}).get(
  async (req, res) => {
    res.json({
      data: [
        {
          id: 1,
          name: 'Mentorama',
          office: 'UI/UX Designer and Web Development',
          time: 'September 2019 – Done',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          image: '/img/logo_mentorama.jpeg',
          skills: ['HTML', 'CSS', 'Figma', 'Javascript'],
        },
        {
          id: 2,
          name: 'University of Mato Grosso',
          office: 'Chemistry Engineering',
          time: 'October 2021 – Done',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
          image: '/img/logo_ufmt.png',
          skills: ['Solve issues'],
        },
      ],
    });
  }
);

export default handler;
