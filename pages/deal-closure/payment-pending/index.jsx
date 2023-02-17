import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CloserBikeCard from '../../../components/dealClosure/closerCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import { RiShareBoxFill } from 'react-icons/ri';

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
      <HeaderPrimary 
        headerClass="mb-2" 
        title="Payment Pending"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <DealFilter title="25 Bids Available" isSortButton />
      <Row>
        {cardData.map((item, index) => (
          <Col md={3} key={index}>
            <CloserBikeCard
              data={item}
              contactCSE
              cardTag
              location
              isHighestBid="Accepted Price"
              isKmDriven
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PaymentsPending;
