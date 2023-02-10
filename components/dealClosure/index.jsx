import React from 'react';
import { Row } from 'react-bootstrap';
import ViewAll from '../common/viewAllHeader';
import CloserBikeCard from './closerCard';
import TagCards from './tagCard';

const DealBikeCard = () => {
  return (
    <Row>
      <ViewAll title="Under Negotiation" />
      <CloserBikeCard location status contactCSE />
      <ViewAll title="Procured Motorcycle" />
      <CloserBikeCard rcTransfer cardTag />
      <ViewAll title="Dropped" />
      <CloserBikeCard location contactCSE />
    </Row>
  );
};

export default DealBikeCard;
