import Link from 'next/link';
import { Menu, Space } from 'antd';
import { OrderedListOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons';

export const NavComponent = (): JSX.Element => {
  
  return (
    <div>
      <Menu mode="horizontal" className='topNavigation'>

        <Menu.Item>
          <Link href='/'>
            <Space>
              <ProjectOutlined />
              Home
            </Space>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href='/developer'>
            <span>
              <Space>
                <UserOutlined />
                Developer
              </Space>
            </span>
          </Link>
        </Menu.Item>
        
        <Menu.Item>
          <Link href='/ssg'>
            <span>
              <Space>
                <OrderedListOutlined />
                SSG Articles
              </Space>
            </span>
          </Link>
        </Menu.Item>
        
        <Menu.Item>
          <Link href='/ssr'>
            <span>
              <Space>
                <OrderedListOutlined />
                SSR Articles
              </Space>
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};