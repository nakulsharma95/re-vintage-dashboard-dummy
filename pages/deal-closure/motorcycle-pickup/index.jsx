import React from 'react';
import { Row } from 'react-bootstrap';
import Breadcrumb from '~/components/common/breadcrumbPrimary';
import Filters from '~/components/common/filters';
import TabPrimary from '~/components/common/tabPrimary';
import SortTabs from '~/components/common/sortTabs';

function MotorcyclePickup() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Motorcycle Pickup" />
      <Filters title="Motorcycle Pickup" />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <SortTabs selectAllCheck />
      <Row>
        {/* <BikeCheckCard isCheckBoxVisible acceptPrice pickupCheck /> */}
      </Row>
    </>
  );
}

export default MotorcyclePickup;
