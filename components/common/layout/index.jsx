import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import style from './style.module.scss';

function Layout(props) {
  const router = useRouter();
  const isLoggin = router.pathname !== '/login';
  const is404 = router.pathname !== '/404';

  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  return (
    <div className={style.layoutStyle}>
      {isLoggin && is404 && (
        <>
          <Header toggleHandler={toggleSidebar} />
          <Sidebar containerStyle={isSidebarActive && style.sidebarShowStyle} />
        </>
      )}
      <main
        className={`${
          isLoggin && is404
            ? style.mainContainerStyle
            : style.mainContainerLogin
        }`}
      >
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
