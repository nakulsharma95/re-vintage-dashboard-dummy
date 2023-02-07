import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row } from 'react-bootstrap';
import ViewAll from 'common/viewAllComp';
import bikeCardStyle from './bikeCardStyle.module.scss';

function BikeCard() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage3.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <Row>
      <ViewAll title="Evaluataion Requests" />
      {cardData.map((item, index) => (
        <Col md={3} key={index}>
          <Card className={bikeCardStyle.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            <div className={`${bikeCardStyle.bikeCardTag}`}>
              Evaluation Overdue
            </div>
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
              <div className="px-3">
                <Button variant="primary" className={bikeCardStyle.bikeCardBtn}>
                  CONTACT SAMIL
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <ViewAll title="Scheduled Evaluation"/>
      {cardData.map((item, index) => (
        <Col md={3} key={index}>
          <Card className={bikeCardStyle.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            <div className={bikeCardStyle.bikeCardTag}>Evaluation Overdue</div>
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
              <div className="px-3">
                <Button
                  variant="primary"
                  className={`${bikeCardStyle.bikeCardBtn} ${bikeCardStyle.viewDetailBtn}`}
                >
                  CONTACT SAMIL
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}

      {/* ---------------------------------------------------------- */}
      <ViewAll title="Completed Evaluation" />
      <Col md={3}>
        <Card className={bikeCardStyle.bikeCardMain}>
          <Card.Img variant="top" src="/images/bikeImage.png" />
          <Card.Body className="px-0">
            <Card.Title className={bikeCardStyle.bkeName}>
              2015 Classic 350 <span>- DL 6T AL 7314</span>
            </Card.Title>
            <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
              <Col className={bikeCardStyle.detailTxt}>43,384 km</Col>
              <Col className={bikeCardStyle.detailTxt}>1st Owner</Col>
              <Col className={bikeCardStyle.detailTxt}>350 CC</Col>
            </Row>
            <div className="d-flex">
              <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                Estimated Price
              </h5>
              <h4 className={`${bikeCardStyle.price} mb-0`}>₹1,25,000.00</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className={bikeCardStyle.bikeCardMain}>
          <Card.Img variant="top" src="/images/bikeImage2.png" />
          <Card.Body className="px-0">
            <Card.Title className={bikeCardStyle.bkeName}>
              2015 Classic 350 <span>- DL 6T AL 7314</span>
            </Card.Title>
            <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
              <Col className={bikeCardStyle.detailTxt}>43,384 km</Col>
              <Col className={bikeCardStyle.detailTxt}>1st Owner</Col>
              <Col className={bikeCardStyle.detailTxt}>350 CC</Col>
            </Row>
            <div className="d-flex">
              <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                Estimated Price
              </h5>
              <h4 className={`${bikeCardStyle.price} mb-0`}>₹1,25,000.00</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className={bikeCardStyle.bikeCardMain}>
          <Card.Img variant="top" src="/images/bikeImage3.png" />
          <Card.Body className="px-0">
            <Card.Title className={bikeCardStyle.bkeName}>
              2015 Classic 350 <span>- DL 6T AL 7314</span>
            </Card.Title>
            <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
              <Col className={bikeCardStyle.detailTxt}>43,384 km</Col>
              <Col className={bikeCardStyle.detailTxt}>1st Owner</Col>
              <Col className={bikeCardStyle.detailTxt}>350 CC</Col>
            </Row>
            <div className="d-flex">
              <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                Estimated Price
              </h5>
              <h4 className={`${bikeCardStyle.price} mb-0`}>₹1,25,000.00</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card className={bikeCardStyle.bikeCardMain}>
          <Card.Img variant="top" src="/images/bikeImage4.png" />
          <Card.Body className="px-0">
            <Card.Title className={bikeCardStyle.bkeName}>
              2015 Classic 350 <span>- DL 6T AL 7314</span>
            </Card.Title>
            <Row className={`${bikeCardStyle.bikeDetail} mx-0`}>
              <Col className={bikeCardStyle.detailTxt}>43,384 km</Col>
              <Col className={bikeCardStyle.detailTxt}>1st Owner</Col>
              <Col className={bikeCardStyle.detailTxt}>350 CC</Col>
            </Row>
            <div className="d-flex">
              <h5 className={`${bikeCardStyle.priceTitle} mb-0`}>
                Estimated Price
              </h5>
              <h4 className={`${bikeCardStyle.price} mb-0`}>₹1,25,000.00</h4>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default BikeCard;
