import type { AppProps } from 'next/app';
import { LayoutComponent } from '../components/LayoutComponent';
import '../styles/styles.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return ( 
    <LayoutComponent>
      {/*eslint-disable-next-line react/jsx-props-no-spreading*/}
      <Component {...pageProps} />
    </LayoutComponent>
  );
};

export default MyApp;