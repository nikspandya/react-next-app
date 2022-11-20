import { IArticleArrayProps, IArticle } from '../types/type';
import { ArticleItemComponent } from './ArticleItemComponent';

export const ArticleListComponent = ({ articles }: IArticleArrayProps): JSX.Element => {
  
  return (
    <div className='card'>
      <h2> SSG Articles: </h2>
      {articles.map((article: IArticle) => (
        <ArticleItemComponent key={article.id} article={article} />
      ))}
    </div>
  );
};