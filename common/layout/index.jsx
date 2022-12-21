import Header from '../header';
import Footer from '../footer';

import style from './style.module.scss';

function Layout(props) {
  return (
    <div className={style.layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
