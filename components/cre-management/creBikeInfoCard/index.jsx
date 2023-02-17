import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";

export default function CreBikeInfoCard() {
  return (
    <>
      <Card className={styles.creBikeInfoCard}>
        <Card.Body className="px-0">
          <div className={styles.chassisNumber}>
            <span>B28EG192BR19</span>
          </div>

          <Card.Title className={styles.modalName}>
            2015 Classic 350 <span>- DL6TAL7314</span>
          </Card.Title>
          <Row className={`${styles.bikeDetail} mx-0`}>
            <Col className={styles.detailTxt}>43,384 km</Col>
            <Col className={styles.detailTxt}>1st Owner</Col>
            <Col className={styles.detailTxt}>350 CC</Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
