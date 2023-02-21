import { Provider } from 'react-redux';
import Layout from '../components/common/layout';
import store from '../redux/store';

// Calendar CSS
import 'react-calendar/dist/Calendar.css';

// Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styles here
import '../styles/theme.scss';
import Login from './login';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>        
      </Provider>
    </>
  );
}

export default MyApp;
