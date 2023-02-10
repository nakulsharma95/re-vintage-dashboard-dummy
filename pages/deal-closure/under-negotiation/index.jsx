import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import styles from './style.module.scss';
import SortTabs from '../../../components/common/sortTabs';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function UnderNegotiation() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <Filters title="Under Negotiation" export />
      <TabPrimary title1="OpDealer (25)en" title2="Seller Portal (12)" />
      <Row>
        <SortTabs />
        <CloserBikeCard status />
        <Col md={12} className="text-center pt-2 pb-4">
          <Button variant="primary" className={styles.loadMoreBtn}>
            Load More
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default UnderNegotiation;
