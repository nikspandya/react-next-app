import Link from 'next/link';
import { IArticleProps } from '../types/type';

export const ArticleItemComponent = ({ article }: IArticleProps): JSX.Element => {
  
  const { id } = article;
  
  return (
    <div className='grid'>
      <Link href={`/ssg/${id}`}>
        <a href={`/ssg/${id}`}>
          <h3>
            article :
            {' '}
            {id}
          </h3>
        </a>
      </Link>
    </div>
    
  );
};