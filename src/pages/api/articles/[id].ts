import { NextApiRequest, NextApiResponse } from 'next';
import { articleMock } from '../../../mockData/mockData';

const APIDataHandler = ({ query: { id } }: NextApiRequest, res: NextApiResponse): void => {
  const selectedArcticle = articleMock.filter((article) => article.id === id);

  if (selectedArcticle.length > 0) {
    res.status(200).json(selectedArcticle[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
};

export default APIDataHandler;