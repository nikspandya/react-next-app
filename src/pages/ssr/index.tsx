import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '../../types/type';

const articleLocalHost: string = process.env.REACT_APP_LOCAL_HOST ?? '';

const SSRComponent = (props: ParsedUrlQuery): JSX.Element => {
  const { articles } = props;
  const articles_ = JSON.parse(JSON.stringify(articles));
  
  return (
    <div>
      <Layout>
        <Content>
          <h1> SSR Articles: </h1>
          <ul>
            {articles_.map((article: IArticle) => (
              <li key={article.body}>{article.body}</li>
            ))}
          </ul>
        </Content>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const articleUrlResponse = await axios.get(articleLocalHost);
  const articles: IArticle = articleUrlResponse.data; 
  
  return {
    props: {
      articles,
    },
  };
};

export default SSRComponent;