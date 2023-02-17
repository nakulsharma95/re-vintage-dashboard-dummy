import Header from './header';
import Sidebar from './sidebar';
import style from './style.module.scss';

function Layout(props) {
  return (
    <div className={style.layoutStyle}>
      <Header />
      <Sidebar />
      <main className={style.mainContainerStyle}>{props.children}</main>
    </div>
  );
}

export default Layout;
