import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './style.module.scss';

const motorcycleDetail = ({ bkeName }) => (
  <div
    className={`${styles.motorcycleDetail} ${styles.completeBorderRight} px-3`}
  >
    <h4 className={styles.motorcycleTitle}>
      Motorcycle details <span>- FB29FH9219HR1</span>
    </h4>
    <h2 className={styles.motorcycleName}>
      {bkeName} <span>- DL6TAL7314</span>
    </h2>
    <Row>
      <Col className={styles.motorcycleSpecs}>43,384 km</Col>
      <Col className={styles.motorcycleSpecs}>1st Owner</Col>
      <Col className={styles.motorcycleSpecs}>350 CC</Col>
    </Row>
    <div className={styles.motorcycleCompleteSpec}>
      <Row className="m-0">
        <Col className="p-0">
          <h5 className={styles.specsHeading}>Owner</h5>
          <p className={styles.specsText}>2nd</p>
        </Col>
        <Col className="p-0">
          <h5 className={styles.specsHeading}>KM</h5>
          <p className={styles.specsText}>35150</p>
        </Col>
        <Col className="p-0">
          <h5 className={styles.specsHeading}>Mileage</h5>
          <p className={styles.specsText}>43.6 kmpl</p>
        </Col>
        <Col md={12} className={`${styles.completeBorderBottom} p-0`} />
        <Col className="p-0">
          <h5 className={`${styles.specsHeading} mt-2`}>Colour</h5>
          <p className={`${styles.specsText} mb-0`}>Red, Chrome</p>
        </Col>
        <Col className="p-0">
          <h5 className={`${styles.specsHeading} mt-2`}>Location</h5>
          <p className={`${styles.specsText} mb-0`}>Delhi</p>
        </Col>
        <Col className="p-0">
          <h5 className={`${styles.specsHeading} mt-2`}>Posting date</h5>
          <p className={`${styles.specsText} mb-0`}>25/08/2022</p>
        </Col>
      </Row>
    </div>
    <h3 className={styles.motorStylePrice}>Evaluation Price</h3>
    <h2 className={styles.motorStylePriceTxt}>₹ 1,19,300</h2>
  </div>
);

export default motorcycleDetail;
