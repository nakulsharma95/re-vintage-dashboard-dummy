import Sidebar from 'common/layout/sidebar/Sidebar';
import Header from './header/Header';

import style from './style.module.scss';

function Layout(props) {
  return (
    <div className={style.layoutStyle}>
      <Header />
      <Sidebar />
      <main className={style.mainContainerStyle}>{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
