import Link from 'next/link';
import React from 'react';
import { Col, Button } from 'react-bootstrap';
import styles from './style.module.scss';

function ViewAll(props) {
  return (
    <Col md={12}>
      <div className={`${styles.titleViewAllMain} ${props.viewAllClass}`}>
        <h5 className={styles.titleViewAll}>
          {props.title} <span>{props.leadsTitle}</span>
        </h5>
        <div>
          {props.viewAllBtn && (
            <Link href={props.viewHandler || '/'} className={styles.viewAllBtn}>
              View All
            </Link>
          )}
        </div>
        {props.viewAllList && (
          <div className={styles.topHeaderBtnBox}>
            <p className={styles.viewText}>View:</p>
            <Button
              variant=""
              className={`${styles.topHeaderBtn} ${styles.activeBtn}`}
            >
              All
            </Button>
            <Button variant="" className={`${styles.topHeaderBtn}`}>
              Dealer
            </Button>
          </div>
        )}
      </div>
    </Col>
  );
}

export default ViewAll;
