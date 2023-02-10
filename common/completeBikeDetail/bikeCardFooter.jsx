import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

const bikeCardFooter = () => {
  return (
    <div>
      <Card.Footer className={styles.completeBikeFooter}>
        <Row>
          <Col md={5}>
            <Row>
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
                <p className={styles.bikeFooterText}>+91 98996 45875</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <h6 className={styles.bikeFooterTitle}></h6>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}></h4>
              <p className={styles.bikeFooterText}></p>
            </Col>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}></h4>
              <p className={styles.bikeFooterText}></p>
            </Col>
          </Col>
          <Col md={3}>
            <h6 className={styles.bikeFooterTitle}></h6>
            <Col>
              <h4 className={styles.bikeFooterSubTitle}></h4>
              <p className={styles.bikeFooterText}></p>
            </Col>
          </Col>
        </Row>
      </Card.Footer>
    </div>
  );
};

export default bikeCardFooter;
