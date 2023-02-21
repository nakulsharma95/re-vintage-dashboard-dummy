import React from 'react';
import { Col, Row } from 'react-bootstrap';

import style from './style.module.scss';

function PaymentInformation() {
  return (
    <div className={style.paymentInformation}>
      {/* <h5>Payment Information</h5> */}
      <div className={style.transerfer}>
        <h6>Transfer to</h6>
        <Row className={style.transerfer_info}>
          <Col lg={5}>
            <p>Name: <span>Ranvijay Singh</span></p>
          </Col>
          <Col lg={5}>
            <p>Account No. <span>ICICI165007845 (Savings)</span> </p>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <p>Amount: <span>₹ 1,19,300</span> </p>
          </Col>
          <Col lg={5}>
            <p>Ifsc Code: <span>ICICI0005</span> </p>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <p>Mode: <span>Online</span> </p>
          </Col>
          <Col lg={5}>
            <p>Branch:<span>Okhla Phase-1, Delhi</span> </p>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <p >Payment Ref No. <span className={style.refNo}>CSFDJG54879865</span> <span>Save</span> </p>
          </Col>
          <Col lg={5}>
            <p>Cancelled Check: <span>Download</span> </p>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <p>MSD ID: <span>2NB9R2HF01</span> </p>
          </Col>
          
        </Row>
      </div>
      <div className={style.received}>
        <h6>Received From</h6>
		<Row>
			<Col>
			<p>Name: <span>Neel Motors, Lajpat Nagar, Delhi</span> </p>
			</Col>
		</Row>
		<Row>
			<Col>
			<p>Amount: <span>₹ 1,19,300</span> </p>
			</Col>
		</Row>
		<Row>
			<Col>
			<p>Mode: <span>Online</span> </p>
			</Col>
		</Row>
		<Row>
			<Col>
			<p>Payment Ref No. <span className={style.refNo}>CSFDJG54879865</span> </p>
			</Col>
		</Row>
      </div>
    </div>
  );
}

export default PaymentInformation;
