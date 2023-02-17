import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'react-bootstrap';
import bikeCardStyle from './style.module.scss';

function BikeCard(props) {
  const { data } = props;
  return (
    <>
      <Card className={bikeCardStyle.bikeCardMain}>
        <Card.Img variant="top" src={data.imageUrl} />
        {props.isEvalTag && (
          <div>
            {data.evalTag && (
              <div className={`${bikeCardStyle.bikeCardTag}`}>
                {data.evalTag}
              </div>
            )}
          </div>
        )}
        <Card.Body className="px-0">
          <Card.Title className={bikeCardStyle.bkeName}>
            2015 Classic 350 <span>- DL 6T AL 7314</span>
          </Card.Title>
          <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
            <Col className={bikeCardStyle.detailTxt}>43,384 km</Col>
            <Col className={bikeCardStyle.detailTxt}>1st Owner</Col>
            <Col className={bikeCardStyle.detailTxt}>350 CC</Col>
          </Row>
          <h5 className={bikeCardStyle.priceTitle}>Estimated Price</h5>
          <h4 className={bikeCardStyle.price}>₹1,15,000 - ₹1,25,000</h4>
          {props.viewDetail && (
            <div className="px-3">
              <Button
                variant="primary"
                className={`${bikeCardStyle.bikeCardBtn} ${bikeCardStyle.viewDetailBtn}`}
              >
                View Detail
              </Button>
            </div>
          )}
          {props.contactBtn && (
            <div className="px-3">
              <Button variant="primary" className={bikeCardStyle.bikeCardBtn}>
                CONTACT SAMIL
              </Button>
            </div>
          )}

          {props.completeEval && (
            <div className="d-flex">
              <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                Estimated Price
              </h5>
              <h4 className={`${bikeCardStyle.price} mb-0`}>₹1,25,000.00</h4>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default BikeCard;
