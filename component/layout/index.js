import Header from "../header"
import Footer from "../footer"

const layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default layout