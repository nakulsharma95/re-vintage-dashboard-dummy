import { Provider } from "react-redux";
import Layout from "../common/layout";
import store from "../redux/store"

// Styles here
import "../styles/theme.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
