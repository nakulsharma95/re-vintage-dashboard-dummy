import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";

export default function CreBikeInfoCard(props) {
  return (
    <>
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
            <Col className={styles.detailTxt}>{props.bikeKm}</Col>
            <Col className={styles.detailTxt}>{props.bikeOwner}</Col>
            <Col className={styles.detailTxt}>{props.bikeCc}</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
