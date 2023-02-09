import Breadcrumb from '../../../common/breadCrumb';
import Filters from '../../../common/filters';
import React from 'react';
import { Row } from 'react-bootstrap';
import TabPrimary from '../../../common/tabPrimary';
import styles from './style.module.scss';
import BikeCard from 'common/dealCloserBikeCard/closerBikeCard';

const PaymentsPending = () => {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <Filters title="Payment Pending" />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <h4 className={styles.bidsTitle}>8 Leads</h4>
      <Row>
        <BikeCard dealPrice/>
      </Row>
    </>
  );
};

export default PaymentsPending;
