import { Col, Row } from 'react-bootstrap';
import BikeCardRadio from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DashboardCard from '../../../components/common/dashboardCard';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import { RiShareBoxFill } from 'react-icons/ri';

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
      
      <HeaderPrimary 
        headerClass="mb-2" 
        title="MarketPlace"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <DashboardCard />
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
