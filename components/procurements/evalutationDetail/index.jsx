import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './style.module.scss';

function EvaluationDetail() {
  return (
    <div className={styles.evaluationDetail}>
      <h4 className={styles.evalTitle}>Evaluation Details</h4>
      <h5 className={styles.evalSubTitle}>Evaluation Location</h5>
      <p className={styles.evalText}>Neel Motors, Lajpat Nagar, Delhi</p>
      <Row>
        <Col>
          <h5 className={styles.evalSubTitle}>Owner Details</h5>
          <p className={styles.evalText}>Rishabh Sharma</p>
        </Col>
        <Col>
          <h5 className={styles.evalSubTitle}>Contact No.</h5>
          <p className={styles.evalText}>+91 98765 43219</p>
        </Col>
      </Row>
      <h5 className={styles.evalSubTitle}>Evaluation Location</h5>
      <p className={styles.evalText}>Neel Motors, Lajpat Nagar, Delhi</p>
      <div className={styles.evalBtnBox}>
        <div className={`${styles.btnthemeOuter} d-flex align-items-center`}>
          <div className={`${styles.btnthemeName} p-0 px-3`}>Details</div>
          <span
            className={`${styles.btnthemeIcon} ${styles.detailsDivide}  px-2`}
          >
            <AiOutlineRight />
          </span>
        </div>
        <Button variant="primary" className={styles.downloadBtn}>
          Download Report
        </Button>
      </div>
    </div>
  );
}

export default EvaluationDetail;
