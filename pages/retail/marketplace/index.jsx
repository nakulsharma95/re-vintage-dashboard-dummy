import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { RiShareBoxFill } from "react-icons/ri";
import BikeCardRadio from "../../../components/common/cardCheckbox";
import BikeCardOlx from "../../../components/common/cardCheckbox";
import { TbTrendingUp } from "react-icons/tb";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import SortTabs from "../../../components/common/sortTabs";
import SearchPrimary from "../../../components/common/searchPrimary";
import FilterButton from "../../../components/common/filterButton";
import HeaderPrimary from "../../../components/common/headerPrimary";
import OutlineButton from "../../../components/common/buttons/OutlineButton";
import DashboardCard from "../../../components/dashboardCard";
import TableListView from "../../../components/retails/tableListView";

export default function MarketPlace() {
  const cardData = [
    {
      imageUrl: "/images/bikeImage.png",
      overDue: "evolutionOver",
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
    {
      imageUrl: "/images/bikeImage2.png",
      dealerLocation: "Neel Motors, Rohini Nagar, Delhi",
    },
    {
      imageUrl: "/images/bikeImage3.png",
      dealerLocation: "Neel Motors, Punjabi Bagh, Delhi",
    },
    {
      imageUrl: "/images/bikeImage4.png",
      dealerLocation: "Neel Motors, Lajpat Nagar, Delhi",
    },
  ];

  const dashboardCardData = [
    {
      title: "Listed (Active + Inactive)",
      description: "1507",
      bottomDescription: "Overall Booking Growth",
      percentage: "12%",
      icon: <TbTrendingUp color="#13B21F" size={15} />,
      cardBg: "#DA291C",
      dividerColor: "white",
      dropdown: "dropdown",
    },
    {
      title: "Recent Inventory",
      description: "97",
      bottomDescription: "Received This Week",
      percentage: "22",
      cardBg: "#403E3E",
      dividerColor: "#282828",
      dropdown: "dropdown",
    },
    {
      title: "Test Ride Requests",
      description: "12",
      cardBg: "#282828",
      dropdown: "dropdown",
    },
    {
      title: "Bookings",
      description: "35",
      cardBg: "#403E3E",
      dropdown: "dropdown",
    },
  ];
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Inventory" />

      <HeaderPrimary headerClass="mb-2" title="MarketPlace">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="dashboard-card">
        {dashboardCardData.map((item) => (
          <DashboardCard
            dropdown={item.dropdown}
            dropdownTitle="1 Month"
            dropdownMenuTitle="2 Month"
            title={item.title}
            description={item.description}
            bottomDescription={item.bottomDescription}
            divider
            icon={item.icon}
            percentage={item.percentage}
            cardBg={item.cardBg}
            dividerColor={item.dividerColor}
            priceValue={item.priceValue}
          />
        ))}
      </div>
      {/* <TableListView /> */}
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title3"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Active">
            <SortTabs
              selectAllCheck
              isCheckInput
              isSubmitBtn
              approveBtn
              moveToOlx
              sortTabTitle="12 Result Found"
            />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardRadio
                    isOlxTooltipVisible={true}
                    bikeModal="2015 Classic 350"
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    creDetail="CRE Detail"
                    creName="John Watson"
                    creNumber="+91 98765 43210"
                    isCardVisible
                    isCheckBoxVisible
                    isBikeTagVisible={false}
                    isOlxTagVisible
                    isBikeChassisVisible={false}
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isCreDetails
                    isDealer
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Inactive (12)">
            <SortTabs selectAllCheck sortTabTitle="15 Result Found" />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardOlx
                    bikeModal="2015 Classic 350"
                    isOlxTooltipVisible={false}
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    creDetail="CRE Detail"
                    creName="John Watson"
                    creNumber="+91 98765 43210"
                    isCardVisible
                    isCheckBoxVisible={false}
                    isBikeTagVisible={false}
                    isOlxTagVisible
                    isBikeChassisVisible={false}
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isCreDetails
                    isDealer
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title3" title="OLX Listing (4)">
            <SortTabs selectAllCheck sortTabTitle="12 Result Found" />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCardOlx
                    bikeModal="2015 Classic 350"
                    isOlxTooltipVisible={false}
                    bikeRc="-DL6TAL7314"
                    bikekm="43,384 km"
                    bikeOwner="1st Owner"
                    bikeCc="350 CC"
                    bikePrice="1,25,000.00"
                    bikeDealer="(C2N0RJ20FC2N)"
                    dealerAddress="Neel Motors, Lajpat Nagar, Delhi"
                    creDetail="CRE Detail"
                    creName="John Watson"
                    creNumber="+91 98765 43210"
                    isCardVisible
                    isCheckBoxVisible={false}
                    isBikeTagVisible={false}
                    isOlxTagVisible
                    isBikeChassisVisible={false}
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isCreDetails
                    isDealer
                  />
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
