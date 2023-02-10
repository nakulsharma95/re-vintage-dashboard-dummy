import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { BiChevronDown } from 'react-icons/bi';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import styles from './style.module.scss';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function PaymentsPending() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <Filters title="Payment Pending" />
      <TabPrimary title1="Dealer" title2="Seller Portal (12)" />
      <div className={styles.sortByMain}>
        <h5 className={styles.sortByTitle}>3 Leads</h5>
        <div className="d-flex align-items-center">
          <span className={styles.sortByTxt}>Sort By :</span>
          <Button variant="primary" className={styles.sortByBtn}>
            Most Relevant <BiChevronDown />
          </Button>
        </div>
      </div>
      <Row>
        <CloserBikeCard contactCSE reason />
      </Row>
    </>
  );
}

export default PaymentsPending;
