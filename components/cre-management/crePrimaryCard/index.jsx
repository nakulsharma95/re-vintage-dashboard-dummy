import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./style.module.scss";

function CrePrimaryCard(props) {
  return (
    <>
      <div className={styles.CardHeading}>
        <h2>{props.cardHeading}</h2>
      </div>
      <Card className={styles.primaryCard}>
        <Card.Body className={styles.primaryCardBody}>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className={styles.primaryCardText}>
                <h3>FIRST NAME</h3>

                <p>{props.firstName}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.primaryCardText}>
                <h3>LAST NAME</h3>

                <p>{props.lastName}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.primaryCardText}>
                <h3>GENDER</h3>

                <p>{props.gender}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.primaryCardText}>
                <h3>DATE OF BIRTH</h3>
                <p>{props.birthDate}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={`${styles.primaryCardText} mb-0`}>
                <h3>MARITAL STATUS</h3>

                <p>{props.matrial}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={`${styles.primaryCardText} mb-0`}>
                <h3>PHYSICALLY HANDICAPPED</h3>
                <p>{props.handicapped}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default CrePrimaryCard;
