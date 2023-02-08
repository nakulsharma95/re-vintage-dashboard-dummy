import React from 'react';
import { Row } from 'react-bootstrap';
import ViewAll from 'common/viewAllComp';
import NoTagCards from './closerBikeCard';
import TagCards from './closeBikeTagcard';

const DealBikeCard = () => {
 
  return (
    <>
      <Row>
        <ViewAll title="Under Negotiation" />
        <NoTagCards />
        <ViewAll title="Procured Motorcycle" />
        <TagCards />
        <ViewAll title="Dropped" />
        <NoTagCards />
      </Row>
    </>
  );
};

export default DealBikeCard;
