import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { DeveloperComponent } from '../../components/DeveloperComponent';
import { DeveloperListComponent } from '../../components/DeveloperListComponent';
import { TeamLeadComponent } from '../../components/TeamLeadComponent';

const App = (): JSX.Element => {
  
  return (
    <div className='App'>
      <Layout>
        <Content>
          <h1>Welcome Cloud Nimbus</h1>
          <TeamLeadComponent />
          <DeveloperComponent />
          <DeveloperListComponent />
        </Content>
      </Layout>
      
    </div>
  );
};

export default App;