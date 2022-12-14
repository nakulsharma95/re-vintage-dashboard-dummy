import Header from "../header"
import Footer from "../footer"

// Styles here
import style from "./style.module.scss"

const Layout = (props) => {
  return (
    <div className={style.layoutStyle}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout