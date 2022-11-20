import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Content>
          <h1>Hello World Form Niks</h1>
        </Content>
      </Layout>
    </div>
  );
};

export default Home;