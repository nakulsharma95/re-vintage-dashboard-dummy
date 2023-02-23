/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import styles from './style.module.scss';

const bikeCardFooter = (props) => (
  <Card.Footer className={styles.completeBikeFooter}>
    <div className={styles.cardFooterCols}>
      <h6 className={styles.bikeFooterTitle}>{props.detailTitle}</h6>
      <Col>
        <h4 className={styles.bikeFooterSubTitle}>{props.userTitle}</h4>
        <p className={styles.bikeFooterText}>{props.name}</p>
      </Col>
      <Col>
        <h4 className={styles.bikeFooterSubTitle}>{props.idTitle}</h4>
        <p className={styles.bikeFooterText}>{props.caseId}</p>
      </Col>
      <Col>
        <h4 className={styles.bikeFooterSubTitle}>{props.contactText}</h4>
        <p className={styles.bikeFooterText}>{props.contact}</p>
      </Col>
    </div>
  </Card.Footer>
);

export default bikeCardFooter;
