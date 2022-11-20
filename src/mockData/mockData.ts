import { IArticle } from '../types/type';

export const articleMock: IArticle[] = [
  {
    id: '1',
    title : 'This is a post 1',
    body: 'Machine will kill Human one day',
    userId: 1,
  },
  {
    id: '2',
    title: 'This is a post 2',
    body: 'Human will kill Machine one day',
    userId: 2,
  },
  {
    id: '3',
    title : 'This is a post 3',
    body : 'Human will kill Human one day',
    userId: 3,
  },
  {
    id : '4',
    title : 'This is a post 4',
    body : 'Machine will kill Machine one day',
    userId: 4,
  },
  {
    id : '5',
    title : 'This is a post 5',
    body : 'No more Killing!!',
    userId: 5,
  },
];