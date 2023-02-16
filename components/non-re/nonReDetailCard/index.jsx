import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from './style.module.scss';

const NonReDetailCard = (props) => {
  const { reData } = props;
  return (
    <>
      <Card className={styles.nonReCard}>
        <Card.Body>
          <Card.Title className={styles.nonReCardTitle}>
            {reData.bikeName} <span>- DL6TAL7314</span>
          </Card.Title>
          <Card.Subtitle className={styles.nonReCardSubTitle}>
            FB29FH9219HR1
          </Card.Subtitle>
          <Row className={styles.nonReCardInline}>
            <Col className={styles.nonReCardInlineText}>43,384 km</Col>
            <Col className={styles.nonReCardInlineText}>1st Owner</Col>
            <Col className={styles.nonReCardInlineText}>160 CC</Col>
          </Row>
          <h3 className={styles.nonReCardPrice}>₹ 1,25,000.00</h3>
          <Card.Text className={styles.dealerCode}>
            Dealer: <span>(C2N0RJ20FC2N)</span>
          </Card.Text>
          <h6 className={styles.dealerAddress}>
            Neel Motors, Lajpat Nagar, Delhi
          </h6>
        </Card.Body>
        <Card.Footer className={styles.nonReCardFooter}>
          <h4 className={styles.footerTitle}>CRE Detail</h4>
          <h4 className={styles.footerSubTitle}>
            Name: <span>John Watson</span>
          </h4>
          <h4 className={`${styles.footerSubTitle} mb-0`}>
            Number: <span>+91 98765 43210</span>
          </h4>
        </Card.Footer>
      </Card>
    </>
  );
};

export default NonReDetailCard;
