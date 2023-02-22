import { useRouter } from 'next/router';
import Header from './header';
import Sidebar from './sidebar';
import style from './style.module.scss';

function Layout(props) {
  const router = useRouter();
  const isLoggin = router.pathname !== '/';
  return (
    <div className={style.layoutStyle}>
      {isLoggin && (
        <>
          <Header />
          <Sidebar />
        </>
      )}
      <main
        className={`${
          isLoggin ? style.mainContainerStyle : style.mainContainerLogin
        }`}
      >
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
