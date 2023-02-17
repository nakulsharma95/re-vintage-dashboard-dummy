import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import SortTabs from '../../../components/common/sortTabs';
import DealCheckCard from '../../../components/dealClosure/dealCheckCard';

function MotorcyclePickup() {
  const cardData = [
    {
      key: '0',
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      cardTag: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      cardTag: 'Under Refurbishment',
      key: '1',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      cardTag: 'Under Approval',
      key: '2',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      key: '3',
    },
  ];
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Motorcycle Pickup" />
      <Filters title="Motorcycle Pickup" export />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <SortTabs selectAllCheck />
      <Row>
        {cardData.map((item, index) => (
          <Col md={3} key={index}>
            <DealCheckCard
              data={item}
              isCheckBoxVisible
              acceptPrice
              pickupCheck
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MotorcyclePickup;
