import React from 'react';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import { Row, Col } from 'react-bootstrap';
import Filters from '../../components/common/filters';
import ViewAll from '../../components/common/viewAllHeader';
import CloserBikeCard from '../../components/dealClosure/closerCard';

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
      <Filters
        title="Deal Closure"
        subTitle="Please fill all the necessary details"
        filterInput
        filterButton
      />
      <div className="bottom-white-border" />
      <Row>
        <ViewAll title="Under Negotiation" />
        {cardData.map((item, index) => {
          return (
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
          );
        })}
        <ViewAll title="Procured Motorcycle" />
        {cardData.map((item, index) => {
          return (
            <Col md={3} key={index}>
              <CloserBikeCard data={item} rcTransfer cardTag isOwner price />
            </Col>
          );
        })}
        <ViewAll title="Dropped" />
        {cardData.map((item, index) => {
          return (
            <Col md={3} key={index}>
              <CloserBikeCard
                data={item}
                location
                contactCSE
                isHighestBid="Highest Bid"
                isKmDriven
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default DealClosure;
