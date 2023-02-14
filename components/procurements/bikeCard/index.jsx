import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'react-bootstrap';
import ViewAll from '../../common/viewAllHeader';
import bikeCardStyle from './style.module.scss';

function BikeCard(props) {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      evalTag: 'Evaluation Overdue',
    },
    {
      imageUrl: '/images/bikeImage3.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <>
      {cardData.map((item) => (
        <Col md={3}>
          <Card className={bikeCardStyle.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            {props.isEvalTag && (
              <>
                {item.evalTag && (
                  <div className={`${bikeCardStyle.bikeCardTag}`}>
                    {item.evalTag}
                  </div>
                )}
              </>
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
                  <Button
                    variant="primary"
                    className={bikeCardStyle.bikeCardBtn}
                  >
                    CONTACT SAMIL
                  </Button>
                </div>
              )}

              {props.completeEval && (
                <div className="d-flex">
                  <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                    Estimated Price
                  </h5>
                  <h4 className={`${bikeCardStyle.price} mb-0`}>
                    ₹1,25,000.00
                  </h4>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default BikeCard;
