import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import styles from './style.module.scss';

function CloseBikeTagCard() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      cardTag: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      cardTag: 'Under Refurbishment',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      cardTag: 'Under Approval',
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
      {cardData.map((item, index) => (
        <Col md={3} key={index}>
          <Card className={styles.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            {item.cardTag && (
              <div
                className={`${styles.bikeCardTag} ${tagClassHandler(
                  item.cardTag
                )}`}
              >
                {item.cardTag}
              </div>
            )}
            <Card.Body className="px-0">
              <Card.Title className={styles.bkeName}>
                2015 Classic 350 <span>- DL 6T AL 7314</span>
              </Card.Title>
              <Row className={`${styles.bikeInlineDetail} mx-0`}>
                <Col className={styles.bikeInlineDetailTxt}>43,384 km</Col>
                <Col className={styles.bikeInlineDetailTxt}>1st Owner</Col>
                <Col className={styles.bikeInlineDetailTxt}>350 CC</Col>
              </Row>
              <h4 className={styles.bikePrice}>₹1,25,000.00</h4>
              <h5 className={styles.priceTitle}>
                RC Transfer Status: <span>Pending</span>
              </h5>
              <div className={styles.btnBox}>
                <Button variant="primary" className={styles.bikeCardBtn}>
                  VIEW DETAILS
                </Button>
              </div>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>Contact CSE</Card.Footer>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CloseBikeTagCard;
