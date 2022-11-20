import Layout, { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { ArticleListComponent } from '../../components/ArticleListComponent';
import { IArticle, IArticleArrayProps } from '../../types/type';

const mockDataUrl: string = process.env.REACT_APP_DATA_SERVER ?? '';

const ArticleList = ({ articles }: IArticleArrayProps): JSX.Element => {

  return (
    <div>
      <Layout>
        <Content>
          <ArticleListComponent articles={articles} />
        </Content>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  
  const articleApiResponse = await axios.get(mockDataUrl);
  const articles: IArticle = articleApiResponse.data;

  return {
    props: {
      articles,
    },
  };
};

export default ArticleList;