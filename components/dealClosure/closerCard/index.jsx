/* eslint-disable consistent-return */
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import ArrowButton from '../../common/buttons/ArrowButton';
import styles from './style.module.scss';

function CloserBikeCard(props) {
  const { data } = props;

  const tagClassHandler = (tag) => {
    switch (tag) {
      case 'Upload Content':
        return styles.orangeTag;

      case 'Under Refurbishment':
        return styles.yellowTag;

      case 'Under Approval':
        return '';

      default:
        break;
    }
  };
  return (
    <Card className={styles.bikeCardMain}>
      <Card.Img variant="top" src={data.imageUrl} />
      {props.cardTag && (
        <div>
          {data.bikeStatus && (
            <div
              className={`${styles.bikeCardTag} ${tagClassHandler(
                data.bikeStatus
              )}`}
            >
              {data.bikeStatus}
            </div>
          )}
        </div>
      )}
      <Card.Body className="px-0">
        <Card.Title className={styles.bkeName}>
          2015 Classic 350 <span>- DL6TAL7314</span>
        </Card.Title>
        {props.isHighestBid && (
          <Row className={`${styles.bidPrice} mx-0`}>
            <Col className={styles.priceTxt}>{props.isHighestBid}</Col>
            <Col className={styles.priceTxtValue}>
              <BiRupee size={22} />
              1,25,000.00
            </Col>
          </Row>
        )}
        {props.isKmDriven && (
          <Row className={`${styles.bikeDetail} mx-0`}>
            <Col>
              <h5 className={styles.bikeDetailTitle}>KMs Driven</h5>
              <h6 className={styles.bikeDetailSubTitle}>48,523 KM</h6>
            </Col>
            <Col className={`${styles.detailTxtValue}`}>
              <h5 className={styles.bikeDetailTitle}>Model</h5>
              <h6 className={styles.bikeDetailSubTitle}>2020</h6>
            </Col>
          </Row>
        )}
        {props.isOwner && (
          <Row className={`${styles.bikeInlineDetail} mx-0`}>
            <Col className={styles.bikeInlineDetailTxt}>43,384 km</Col>
            <Col className={styles.bikeInlineDetailTxt}>1st Owner</Col>
            <Col className={styles.bikeInlineDetailTxt}>350 CC</Col>
          </Row>
        )}
        {props.price && <h3 className={styles.priceHead}>₹1,25,000.00</h3>}
        {props.rcTransfer && (
          <h5 className={styles.priceTitle}>
            RC Transfer Status: <span>Pending</span>
          </h5>
        )}
        {props.location && (
          <h5 className={styles.priceTitle}>
            Location: <span>Mumbai, Maharashtra</span>
          </h5>
        )}
        {props.status && (
          <div className={styles.statusBox}>
            <h5 className={styles.priceTitle}>Status:</h5>
            <h3 className={styles.boxText}>Payment detail pending</h3>
          </div>
        )}
        {props.dealPrice && (
          <Row className={`${styles.bidPrice} mx-0`}>
            <Col className={styles.priceTxt}>Dealer Price</Col>
            <Col className={styles.priceTxtValue}>₹1,25,000.00</Col>
          </Row>
        )}
        {props.reason && (
          <Row className={`${styles.bikeDetail} mx-0`}>
            <Col md={12}>
              <h5 className={styles.bikeDetailTitle}>Reason</h5>
              <h6 className={styles.bikeDetailSubTitle}>
                Customer not interested
              </h6>
            </Col>
          </Row>
        )}
        <div className={styles.cardBtnCols}>
          <ArrowButton detailLink="/bike-details" title="VIEW DETAILS" />
        </div>
      </Card.Body>
      {props.contactCSE && (
        <Card.Footer className={styles.cardFooter}>Contact CSE</Card.Footer>
      )}
    </Card>
  );
}

export default CloserBikeCard;
