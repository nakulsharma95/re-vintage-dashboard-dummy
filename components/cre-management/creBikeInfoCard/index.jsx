import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import styles from './style.module.scss';

export default function CreBikeInfoCard(props) {
  return (
    <Card className={styles.creBikeInfoCard}>
      <Card.Body className="px-0">
        <div className={styles.chassisNumber}>
          <span>{props.bikeChassis}</span>
        </div>

        <Card.Title className={styles.modalName}>
          <h3>{props.bikeModal}</h3>
          <span>{props.bikeDL}</span>
        </Card.Title>
        <Row className={`${styles.bikeDetail} mx-0`}>
          <Col className={styles.detailTxt}>
            <div className={styles.iconXsView}>
              <Image src="/images/icons/road.svg" alt="not found" />
            </div>
            {props.bikeKm}
          </Col>
          <Col className={styles.detailTxt}>
            <div className={styles.iconXsView}>
              <Image src="/images/icons/user.svg" alt="not found" />
            </div>
            {props.bikeOwner}
          </Col>
          <Col className={styles.detailTxt}>
            <div className={styles.iconXsView}>
              <Image src="/images/icons/engine.svg" alt="not found" />
            </div>
            {props.bikeCc}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
