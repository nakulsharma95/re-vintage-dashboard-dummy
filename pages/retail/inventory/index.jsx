import { Col, Row } from 'react-bootstrap';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DashboardCard from '../../../components/common/dashboardCard';
import Filters from '../../../components/common/filters';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';

export default function Inventory() {
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
      <Filters title="Inventory" />
      <DashboardCard />
      <TabPrimary
        title1="Content Approval Pending (12)"
        title2="Content Upload Pending (8)"
        title3="Under Refurbishment"
        title4="Pending Evaluation (15)"
      />
      <SortTabs selectAllCheck approveBtn isSortTabBox />

      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} key={item.id}>
            <BikeCardRadio
              isCheckBoxVisible
              isButtonVisible
              isCardVisible={false}
              isBikeTagVisible
              isOlxTagVisible={false}
              isBikeChassisVisible
              imageUrl={item.imageUrl}
              dealerLocation={item.dealerLocation}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
