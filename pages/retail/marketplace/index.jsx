import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { BiCheck } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import { TbTrendingUp } from 'react-icons/tb';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import BikeCard from '../../../components/common/cardCheckbox';
import CustomCheckBox from '../../../components/common/customCheckBox';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import ToggleView from '../../../components/common/toggleView';
import DashboardCard from '../../../components/dashboardCard';

export default function MarketPlace() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      dealerLocation: 'Neel Motors, Rohini Nagar, Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      dealerLocation: 'Neel Motors, Punjabi Bagh, Delhi',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      dealerLocation: 'Neel Motors, Lajpat Nagar, Delhi',
    },
  ];

  const dashboardCardData = [
    {
      title: 'Listed (Active + Inactive)',
      description: '1507',
      bottomDescription: 'Overall Booking Growth',
      percentage: '12%',
      icon: <TbTrendingUp color="#13B21F" size={15} />,
      cardBg: '#DA291C',
      dividerColor: 'white',
      dropdown: 'dropdown',
    },
    {
      title: 'Recent Inventory',
      description: '97',
      bottomDescription: 'Received This Week',
      percentage: '22',
      cardBg: '#403E3E',
      dividerColor: '#282828',
      dropdown: 'dropdown',
    },
    {
      title: 'Test Ride Requests',
      description: '12',
      cardBg: '#282828',
      dropdown: 'dropdown',
    },
    {
      title: 'Bookings',
      description: '35',
      cardBg: '#403E3E',
      dropdown: 'dropdown',
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
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabclassname="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Active">
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
                <div className="vertical-divider" />
                <div className="d-flex align-items-center">
                  <CustomCheckBox checkTitle="Select all -" className="me-2" />
                  <OutlineButton
                    leftIcon={<BiCheck className="m-0 me-2" />}
                    title="Move to OLX"
                  />
                  <OutlineButton
                    leftIcon={<BiCheck className="m-0 me-2" />}
                    title="Move to Inactive"
                  />
                </div>
              </div>

              <div className="right-sec">
                <ToggleView />
              </div>
            </div>

            <Row>
              {cardData.map((item) => (
                <Col
                  xxl={3}
                  xl={4}
                  lg={6}
                  key={item.id}
                  xs={6}
                  className="p-xs-1"
                >
                  <BikeCard
                    isOlxTooltipVisible
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
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">15 Result Found</h5>
              </div>

              <div className="right-sec">
                <ToggleView />
              </div>
            </div>
            <Row>
              {cardData.map((item) => (
                <Col
                  xxl={3}
                  xl={4}
                  lg={6}
                  key={item.id}
                  xs={6}
                  className="p-xs-1"
                >
                  <BikeCard
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
            <div className="action-list-style my-3">
              <div className="left-sec">
                <h5 className="title3">12 Result Found</h5>
              </div>

              <div className="right-sec">
                <ToggleView />
              </div>
            </div>
            <Row>
              {cardData.map((item) => (
                <Col
                  xxl={3}
                  xl={4}
                  lg={6}
                  key={item.id}
                  xs={6}
                  className="p-xs-1"
                >
                  <BikeCard
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
