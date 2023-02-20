import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import ViewAll from '../../components/common/viewAllHeader';
import CloserBikeCard from '../../components/dealClosure/closerCard';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';

function DealClosure() {
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
      <Breadcrumb title="Deal Closure" />
      <HeaderPrimary 
        headerClass="mb-2" 
        title="Deal Closure" 
        subTitle="Please fill all the necessary details"
      >
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>
      
      <div className="bottom-white-border" />
      <Row>
        <ViewAll title="Under Negotiation" />
        {cardData.map((item, index) => (
          <Col md={3} key={index}>
            <CloserBikeCard
              data={item}
              location
              status
              contactCSE
              isHighestBid="Highest Bid"
              isKmDriven
            />
          </Col>
        ))}
        <ViewAll title="Procured Motorcycle" />
        {cardData.map((item, index) => (
          <Col md={3} key={index}>
            <CloserBikeCard data={item} rcTransfer cardTag isOwner price />
          </Col>
        ))}
        <ViewAll title="Dropped" />
        {cardData.map((item, index) => (
          <Col md={3} key={index}>
            <CloserBikeCard
              data={item}
              location
              contactCSE
              isHighestBid="Highest Bid"
              isKmDriven
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default DealClosure;
