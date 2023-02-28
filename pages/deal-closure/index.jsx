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
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="bottom-white-border" />
      <Row>
        <ViewAll
          title="Under Negotiation"
          viewAllBtn
          viewAllClass="mt-3 mb-3"
          viewHandler="deal-closure/under-negotiation"
        />
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6}  md={6}>
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
        <ViewAll
          title="Procured Motorcycle"
          viewAllBtn
          viewAllClass="mt-3 mb-3"
          viewHandler="deal-closure/procured"
        />
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6}  md={6}>
            <CloserBikeCard data={item} rcTransfer cardTag isOwner price />
          </Col>
        ))}
        <ViewAll
          title="Dropped"
          viewAllBtn
          viewAllClass="mt-3 mb-3"
          viewHandler="deal-closure/dropped"
        />
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6}  md={6}>
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
