import { NextApiRequest, NextApiResponse } from 'next';
import { articleMock } from '../../../mockData/mockData';

const APIDataHandler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(articleMock);
};

export default APIDataHandler;