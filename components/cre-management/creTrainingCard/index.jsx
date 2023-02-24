import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

function CreTrainingCard(props) {
  return (
    <>
      <div className={styles.CardHeading}>
        <h2>{props.cardHeading}</h2>
      </div>
      <Card className={styles.TrainingCard}>
        <Card.Body className={styles.TrainingCardBody}>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>TRAINING NAME</h3>

                <p>{props.trainingName}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>DATE COMPLETED ON</h3>

                <p>{props.completeOn}</p>
              </div>
            </Col>

            <div className={styles.divider} />

            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>TRAINING NAME</h3>

                <p>{props.trainingName}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>DATE COMPLETED ON</h3>

                <p>{props.completeOn}</p>
              </div>
            </Col>
            <div className={styles.divider} />
            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>TRAINING NAME</h3>

                <p>{props.trainingName}</p>
              </div>
            </Col>

            <Col xl={6} lg={6} md={6}>
              <div className={styles.TrainingCardText}>
                <h3>DATE COMPLETED ON</h3>

                <p>{props.completeOn}</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreTrainingCard;
