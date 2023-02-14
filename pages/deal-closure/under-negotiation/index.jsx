import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import SortTabs from '../../../components/common/sortTabs';
import CloserBikeCard from '../../../components/dealClosure/closerCard';
import DetailPagination from '../../../components/common/paginationPrimary';

function UnderNegotiation() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <Filters title="Under Negotiation" export />
      <TabPrimary title1="OpDealer (25)en" title2="Seller Portal (12)" />
      <Row>
        <SortTabs />
        <CloserBikeCard location status contactCSE/>
      </Row>
      <DetailPagination />
    </>
  );
}

export default UnderNegotiation;
