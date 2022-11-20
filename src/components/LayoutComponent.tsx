import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { NavComponent } from './NavComponent';

export const LayoutComponent = ({ children }: Record<string, JSX.Element>): JSX.Element => {

  return (
    <Layout>
      <NavComponent />
      <Content>
        <div className='body'>
          {children}
        </div>
      </Content>
    </Layout>
  );
};