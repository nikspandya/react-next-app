import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { IArticle } from '../../../types/type';

const mockDataUrl: string = process.env.REACT_APP_DATA_SERVER ?? '';

const Article = (props : ParsedUrlQuery): JSX.Element => {
  
  const { article } = props;
  const article_ = JSON.parse(JSON.stringify(article));

  return (
    <div>
      <Layout>
        <Content>
          <h1>
            {article_.title}
          </h1>
          <br />
          <Link href='/ssg'>Go Back</Link>
        </Content>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;
  
  const articleApiResponse = await axios.get(`${mockDataUrl}/${id}`);
  const article: IArticle = articleApiResponse.data;

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async ()=> {
  
  const articleApiResponse = await axios.get(mockDataUrl);
  const articles = articleApiResponse.data;

  const articleIds = articles.map((article: IArticle) => article.id);
  const articlePaths = articleIds.map((id: string) =>({ params: { id: id.toString() } }));

  return {
    paths: articlePaths,
    fallback: false,
  };
};

export default Article;