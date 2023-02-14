import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiFillPhone } from 'react-icons/ai';
import ArrowButton from '../../common/buttons/ArrowButton';
import styles from './style.module.scss';

function EvaluationDetail({ isEvalBtnVisible, isCallerBtnVisible }) {
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

      {isEvalBtnVisible && (
        <div className={styles.evalBtnBox}>
          <div className={styles.arrowBtnDiv}>
            <ArrowButton title="Detail" />
          </div>
          <Button variant="primary" className={styles.downloadBtn}>
            Download Report
          </Button>
        </div>
      )}

      {isCallerBtnVisible && (
        <div className={styles.callerBtnBox}>
          <Col className={styles.CallBtn1}>
            <AiFillPhone size={15} />
            <span className="mx-2">Call Customer</span>
          </Col>
          <Col className={styles.CallBtn2}>
            <AiFillPhone size={15} />
            <span className="mx-2">Call Dealer</span>
          </Col>
        </div>
      )}
    </div>
  );
}

export default EvaluationDetail;
