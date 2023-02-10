import React from 'react';
import { Row } from 'react-bootstrap';
import CloserBikeCard from '~/components/dealClosure/closerCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import styles from './style.module.scss';

function PaymentsPending() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <Filters title="Payment Pending" />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <h4 className={styles.bidsTitle}>25 Bids Available</h4>
      <Row>
        <CloserBikeCard contactCSE />
      </Row>
    </>
  );
}

export default PaymentsPending;
