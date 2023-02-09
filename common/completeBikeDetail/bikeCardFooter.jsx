import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

const bikeCardFooter = () => {
  return (
    <div>
      <Card.Footer className={styles.completeBikeFooter}>
        <h6 className={styles.bikeFooterTitle}>SAMIL Details</h6>
        <Row>
          <Col md={8}>
            <Row>
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
        </Row>
      </Card.Footer>
    </div>
  );
};

export default bikeCardFooter;
