import { Col, Row } from 'react-bootstrap';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DashboardCard from '../../../components/common/dashboardCard';
import Filters from '../../../components/common/filters';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';

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
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Inventory" />
      <Filters filterInput filterButton export title="MarketPlace" />
      <DashboardCard
      Dropdown
      title1="Listed "
      titleBr= "(Active + Inactive)"
      description1="1507"
      bottomDescription1="Overall Booking Growth"
      title2="Recent Inventory"
      description2="97"
      bottomDescription2="Received This Week"
      title3="Test Ride Requests"
      description3="12"
      title4="Booking"
      description4="35"
       />
      <TabPrimary
        title1="Active"
        title2="Inactive (12)"
        title3="OLX Listing (4)"
      />
      <SortTabs selectAllCheck approveBtn moveToOlx />

      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <BikeCardRadio
              isCardVisible
              isCheckBoxVisible
              isBikeTagVisible={false}
              isOlxTagVisible
              isBikeChassisVisible={false}
              imageUrl={item.imageUrl}
              dealerLocation={item.dealerLocation}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
