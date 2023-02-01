import Head from "next/head";
import Sidebar from "../components/ui/sidebar/Sidebar";
import Header from "../components/layout/header/Header";
import TabPrimary from "../common/tabPrimary/index";
import DetailCard from "../common/detailCard/index";
import DetailPagination from "../common/detailPagination/index";
import CustomButton from "common/customButton";

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Home | Boiler" />
        <meta name="description" content="" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />

        {/* Main Page Title */}
        <title>Welcome</title>
      </Head>

      <main className="main">
        <div className="re-mainContainer">
          <Header />
          <div className="mainDflex">
            <div className="mainsidebar-menu">{/* <Sidebar /> */}</div>
          </div>
          <div className="">
            <TabPrimary />
            <DetailCard />
            <DetailPagination />
          </div>
        </div>
      </main>
    </div>
  );
}
