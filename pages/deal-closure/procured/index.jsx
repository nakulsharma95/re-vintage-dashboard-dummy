import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CloserBikeCard from '../../../components/dealClosure/closerCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';

function PaymentsPending() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeStatus: 'Under Refurbishment',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeStatus: 'Under Approval',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <Filters title="Payment Pending" export filterInput filterButton />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <DealFilter title="8 Leads" />
      <Row>
        {cardData.map((item, index) => {
          return (
            <Col md={3} key={index}>
              <CloserBikeCard
                data={item}
                isHighestBid="Evolution Price"
                isKmDriven
                dealPrice
                cardTag
                location
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default PaymentsPending;
