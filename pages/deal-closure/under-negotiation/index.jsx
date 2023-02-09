import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import TabPrimary from 'common/tabPrimary';
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './style.module.scss';
import UnderBikeCard from 'common/dealCloserBikeCard/closerBikeCard';
import SortTabs from 'common/sortTabs';

const UnderNegotiation = () => {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <Filters title="Under Negotiation" export />
      <TabPrimary title1="OpDealer (25)en" title2="Seller Portal (12)" />
      <Row>
        <SortTabs />
        <UnderBikeCard status />
        <Col md={12} className="text-center pt-2 pb-4">
          <Button variant="primary" className={styles.loadMoreBtn}>
            Load More
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UnderNegotiation;
