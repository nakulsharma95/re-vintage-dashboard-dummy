import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiDownload, FiEdit2 } from 'react-icons/fi';

import style from './style.module.scss';

function PaymentInformation() {
  return (
    <div className={style.paymentInformation}>
      <div className={style.transerfer}>
        <h6>Transfer to</h6>
        <Row className={style.transerfer_info}>
          <Col lg={2} sm={5} xs={6}>
            <p>Name:</p>
          </Col>
          <Col lg={4} sm={5} xs={6}>
            <p>
              <span>Ranvijay Singh</span>
            </p>
          </Col>
          <Col lg={2}>
            <p>Account No. </p>
          </Col>
          <Col lg={4}>
            <p>
              <span>ICICI165007845 (Savings)</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>Amount: </p>
          </Col>
          <Col lg={4}>
            <p>
              <span>₹ 1,19,300</span>
            </p>
          </Col>
          <Col lg={2}>
            <p>Ifsc Code: </p>
          </Col>
          <Col lg={4}>
            <p>
              
              <span>ICICI0005</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>Mode: </p>
          </Col>
          <Col lg={4}>
            <p>
              
              <span>Online</span>
            </p>
          </Col>
          <Col lg={2}>
            <p>Branch: </p>
          </Col>
          <Col lg={4}>
            <p>
              <span>Okhla Phase-1, Delhi</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>Payment Ref No. </p>
          </Col>
          <Col lg={4}>
            <p>
              
              <span className={style.refNo}>CSFDJG54879865</span>
              <span>Save</span>
            </p>
          </Col>
          <Col lg={2}>
            <p>Cancelled Check: </p>
          </Col>
          <Col lg={4}>
            <p>
              <span className={style.downloadBtn}>
                <FiDownload /> Download
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>MSD ID: </p>
          </Col>
          <Col lg={4}>
            <p>
              <span>2NB9R2HF01</span>
            </p>
          </Col>
        </Row>
      </div>
      <div className={style.received}>
        <h6>Received From</h6>
        <Row>
          <Col lg={2}>
            <p>Name: </p>
          </Col>
          <Col lg={10}>
            <p>
              <span>Neel Motors, Lajpat Nagar, Delhi</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>Amount:</p>
          </Col>
          <Col lg={10}>
            <p>
              <span>₹ 1,19,300</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={2}>
            <p>Mode: </p>
          </Col>
          <Col lg={10}>
            <p>
              <span>Online</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <p>Payment Ref No. </p>
          </Col>
          <Col lg={7}>
            <p>
              <span className={style.refNo}>CSFDJG54879865</span>
              <span>
                <FiEdit2 />
              </span>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PaymentInformation;
