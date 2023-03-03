import { Col, Row, Tab, Tabs } from 'react-bootstrap';
import { TbTrendingUp } from 'react-icons/tb';
import { RiShareBoxFill } from 'react-icons/ri';
import DealFilter from '../../../components/dealClosure/dealFilter';
import BikeCard from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DashboardCard from '../../../components/dashboardCard';
import SortTabs from '../../../components/common/sortTabs';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

export default function Inventory() {
  const dashboardCardData = [
    {
      title: 'Total',
      description: '32',
      bottomDescription: 'Overall Growth',
      percentage: '12%',
      icon: <TbTrendingUp color="#13B21F" size={15} />,
      cardBg: '#DA291C',
      dividerColor: 'white',
    },
    {
      title: 'Content Approval Pending',
      description: '12',
      bottomDescription: 'Received This Week',
      percentage: '8',
      cardBg: '#403E3E',
      dividerColor: '#282828',
    },
    {
      title: 'Content Upload Pending',
      description: '08',
      cardBg: '#282828',
    },
    {
      title: 'Under Refurbishment',
      description: '12',
      cardBg: '#282828',
    },
  ];
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
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Inventory" />

      <HeaderPrimary headerClass="mb-2" title="Inventory">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="dashboard-card">
        {dashboardCardData.map((item) => (
          <DashboardCard
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
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Content Approval Pending (12)">
            <SortTabs
              selectAllCheck
              approveBtn
              isSortTabBox
              isCheckInput
              sortTabTitle="12 Result Found"
            />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCard
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
                    isCheckBoxVisible
                    isButtonVisible
                    isCardVisible={false}
                    isBikeTagVisible
                    isOlxTagVisible={false}
                    isBikeChassisVisible
                    imageUrl={item.imageUrl}
                    dealerLocation={item.dealerLocation}
                    isCreDetails
                    isDealer
                  />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="title2" title="Content Upload Pending (8)">
            <DealFilter className="mb-5" singleTitle="8 Result Found" />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCard
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
                    isCardVisible={false}
                    isCheckBoxVisible={false}
                    isBikeTagVisible={false}
                    isOlxTagVisible={false}
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
          <Tab eventKey="title3" title="Under Refurbishment">
            <SortTabs
              selectAllCheck
              isSortTabBox
              sortTabTitle="12 Result Found"
            />
            <Row>
              {cardData.map((item) => (
                <Col xxl={3} xl={4} lg={6} key={item.id}>
                  <BikeCard
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
                    isCardVisible={false}
                    isCheckBoxVisible={false}
                    isBikeTagVisible={false}
                    isOlxTagVisible={false}
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
