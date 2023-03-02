import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

function CreAddressDetailCard(props) {
  return (
    <>
      <div className={styles.CardHeading}>
        <h2>{props.cardHeading}</h2>
      </div>

      <Card className={styles.addressCard}>
        <Card.Body className={styles.addressCardBody}>
          <Row>
            <Col xl={12} lg={12} md={12}>
              <div className={styles.addressCardText}>
                <h3>CURRENT ADDRESS</h3>
                <p>{props.currentHouseNumber}</p>
                <p>{props.currentAddress}</p>
                <p>{props.currentPincode}</p>
              </div>
            </Col>

            <Col xl={112} lg={12} md={12}>
              <div className={styles.addressCardText}>
                <p>{props.permanentHouseNumber}</p>
                <p>{props.permanentAddress}</p>
                <p>{props.permanentPincode}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreAddressDetailCard;
