import React from 'react';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import { Row } from 'react-bootstrap';
import TabPrimary from 'common/tabPrimary';
import SortTabs from 'common/sortTabs';
import BikeCheckCard from 'common/dealCloserBikeCard/closerBikeCheckCard';

const MotorcyclePickup = () => {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Motorcycle Pickup" />
      <Filters title="Motorcycle Pickup" />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <SortTabs selectAllCheck />
      <Row>
        <BikeCheckCard status isCheckBoxVisible acceptPrice pickupCheck/>
      </Row>
    </>
  );
};

export default MotorcyclePickup;
