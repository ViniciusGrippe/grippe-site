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
            'Course focused on website prototyping, component creation, typography and grid structuring.',
          image: '/img/logo_mentorama.jpeg',
          skills: ['HTML', 'CSS', 'Figma', 'Javascript'],
        },
        {
          id: 2,
          name: 'University of Mato Grosso',
          office: 'Chemistry Engineering',
          time: 'October 2021 – Done',
          description:
            'Degree in engineering with a focus on solving problems and finding new solutions in production lines in general.',
          image: '/img/logo_ufmt.png',
          skills: ['Solve issues'],
        },
      ],
    });
  }
);

export default handler;
