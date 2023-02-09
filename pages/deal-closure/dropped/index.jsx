import Breadcrumb from '../../../common/breadCrumb';
import Filters from '../../../common/filters';
import React from 'react';
import { Row, Button } from 'react-bootstrap';
import TabPrimary from '../../../common/tabPrimary';
import styles from './style.module.scss';
import BikeCard from 'common/dealCloserBikeCard/closerBikeCard';
import { BiChevronDown } from 'react-icons/bi';

const PaymentsPending = () => {
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
        <BikeCard contactCSE reason />
      </Row>
    </>
  );
};

export default PaymentsPending;
