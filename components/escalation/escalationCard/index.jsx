import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ArrowButton from '../../common/buttons/ArrowButton';

import style from './style.module.scss';

function EscalationCard() {
  return (
    <div className={style.escalationCard}>
      <div className={style.escalationCard_head}>
        <Row className={style.escalationCard_topRow}>
          <Col className={style.escalationCard_topCol} lg={2}>
            <h6>
              Escalation ID <span>- CSCB29E2B1</span>
            </h6>
          </Col>
          <Col className={style.escalationCard_topCol} lg={2}>
            <h6>
              Escalation Issue: <span>Customer</span>
            </h6>
          </Col>
          <Col className={style.escalationCard_topCol} lg={2}>
            <h6>
              Escalated By: <span>CRE</span>
            </h6>
          </Col>
          <Col className={style.escalationCard_status}>
            <h6 lg={4}>Status:<span> Unresolved</span></h6>
          </Col>
        </Row>
		<Row className={style.escalationCard_bottomRow}>
			<Col className={style.escalationCard_bottomCol} lg={2}>
			<p>Escalation Stage <br/> <span>Procurement</span> </p>
			</Col>
			<Col className={style.escalationCard_bottomCol} lg={2}>
			<p>VDMP ID <br/> <span>CNNASA0R2R1</span> </p>
			</Col>
			<Col lg={3}>
			<p>Description <br/> <span>Reason for escalation of this lead</span> </p>
			</Col>
			<Col lg={3}>
			<p>Date and Time of escalation <br/> <span>17 Jan, 2023 at 4:23 PM</span> </p>
			</Col>
			<Col className='mt-3' lg={2}>
			<ArrowButton  detailLink="/" title="View Details" />
			</Col>
		</Row>
      </div>
      <div className={style.escalationCard_body}></div>
    </div>
  );
}

export default EscalationCard;
