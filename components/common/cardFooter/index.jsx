/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

const bikeCardFooter = (props) => (
  <div>
    <Card.Footer className={styles.completeBikeFooter}>
      <Row>
        <Col md={5}>
          <div className={styles.cardFooterCols}>
            <h6 className={styles.bikeFooterTitle}>SAMIL Details</h6>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}>Name</h4>
              <p className={styles.bikeFooterText}>Ashok Sharma</p>
            </Col>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}>SAMIL Case ID</h4>
              <p className={styles.bikeFooterText}>ASHS45125</p>
            </Col>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}>Contact No.</h4>
              <p className={styles.bikeFooterText}>+91 9899645875</p>
            </Col>
          </div>
        </Col>

        {props.creDetails && (
          <Col md={4}>
            <div className={styles.cardFooterCols}>
              <h6 className={styles.bikeFooterTitle}>CRE Details</h6>
              <Col>
                <h4 className={styles.bikeFooterSubTitle}>Name</h4>
                <p className={styles.bikeFooterText}>Rishabh Sharma</p>
              </Col>
              <Col>
                <h4 className={styles.bikeFooterSubTitle}>Contact No.</h4>
                <p className={styles.bikeFooterText}>+91 9899645875</p>
              </Col>
            </div>
          </Col>
        )}
        {props.ownerDetails && (
          <Col md={3}>
            <div className={`${styles.cardFooterCols} ${styles.borderNone}`}>
              <h6 className={styles.bikeFooterTitle}>Owner Details</h6>
              <Col>
                <h4 className={styles.bikeFooterSubTitle}>Contact No.</h4>
                <p className={styles.bikeFooterText}>+91 9899645875</p>
              </Col>
            </div>
          </Col>
        )}
      </Row>
    </Card.Footer>
  </div>
);

export default bikeCardFooter;
