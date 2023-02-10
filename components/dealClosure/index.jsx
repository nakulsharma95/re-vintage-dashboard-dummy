import React from 'react';
import { Row } from 'react-bootstrap';
import ViewAll from '../common/viewAllHeader';
import CloserBikeCard from './closerCard';
import TagCards from './tagCard';

function DealBikeCard() {
  return (
    <Row>
      <ViewAll title="Under Negotiation" />
      <CloserBikeCard />
      <ViewAll title="Procured Motorcycle" />
      <TagCards />
      <ViewAll title="Dropped" />
      <CloserBikeCard />
    </Row>
  );
}

export default DealBikeCard;
