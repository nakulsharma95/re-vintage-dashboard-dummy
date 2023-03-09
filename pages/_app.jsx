import { Provider } from 'react-redux';
import { SSRProvider } from 'react-bootstrap';
import Layout from '../components/common/layout';
import store from '../redux/store';

// Calendar CSS
import 'react-calendar/dist/Calendar.css';

// Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Styles here
import '../styles/theme.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
