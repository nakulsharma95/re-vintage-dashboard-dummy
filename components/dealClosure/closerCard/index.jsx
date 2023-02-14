import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import styles from './style.module.scss';

function CloserBikeCard(props) {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeStatus: 'Under Refurbishment',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeStatus: 'Under Approval',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
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
    <>
      {cardData.map((item) => (
        <Col md={3} key={item.id}>
          <Card className={styles.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            {props.cardTag && (
              <>
                {item.bikeStatus && (
                  <div
                    className={`${styles.bikeCardTag} ${tagClassHandler(
                      item.bikeStatus
                    )}`}
                  >
                    {item.bikeStatus}
                  </div>
                )}
              </>
            )}
            <Card.Body className="px-0">
              <Card.Title className={styles.bkeName}>
                2015 Classic 350 <span>- DL 6T AL 7314</span>
              </Card.Title>
              <Row className={`${styles.bidPrice} mx-0`}>
                <Col className={styles.priceTxt}>Highest Bid</Col>
                <Col className={styles.priceTxtValue}>₹1,25,000.00</Col>
              </Row>
              <Row className={`${styles.bikeDetail} mx-0`}>
                <Col>
                  <h5 className={styles.bikeDetailTitle}>KMs Driven</h5>
                  <h6 className={styles.bikeDetailSubTitle}>48,523 KM</h6>
                </Col>
                <Col className={`${styles.detailTxtValue} text-end`}>
                  <h5 className={styles.bikeDetailTitle}>Model</h5>
                  <h6 className={styles.bikeDetailSubTitle}>2020</h6>
                </Col>
              </Row>
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
              <div className={styles.btnBox}>
                <Button variant="primary" className={styles.bikeCardBtn}>
                  VIEW DETAILS
                </Button>
              </div>
            </Card.Body>
            {props.contactCSE && (
              <Card.Footer className={styles.cardFooter}>
                Contact CSE
              </Card.Footer>
            )}
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CloserBikeCard;
