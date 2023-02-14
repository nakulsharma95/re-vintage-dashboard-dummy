import React from 'react';
import { Row } from 'react-bootstrap';
import CloserBikeCard from '../../../components/dealClosure/closerCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';

function PaymentsPending() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <Filters title="Payment Pending" export />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <DealFilter title="25 Bids Available" isSortButton />
      <Row>
        <CloserBikeCard contactCSE cardTag location />
      </Row>
    </>
  );
}

export default PaymentsPending;
