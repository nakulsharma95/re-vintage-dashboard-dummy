import { SSRProvider } from 'react-bootstrap';
import Layout from '../components/common/layout';
import store from '../redux/store';

// Calendar CSS
import 'react-calendar/dist/Calendar.css';

// Slick Carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styles here
import '../styles/theme.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
