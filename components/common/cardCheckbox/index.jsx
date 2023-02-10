import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, Col, Row, Form } from 'react-bootstrap';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './style.module.scss';
import ToggleSwitchCard from '~/components/retails/toggleSwitchCard';

function BikeCardRadio({ isCheckBoxVisible, isButtonVisible, isCardVisible }) {
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
      {cardData.map((item, index) => (
        <Col xxl={3} xl={4} lg={6} key={index}>
          <Card className={styles.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            {isCheckBoxVisible && (
              <div className={`${styles.bikeCardCheck}`}>
                <Form.Group
                  className={styles.customCheck}
                  controlId={`${index}form`}
                >
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </div>
            )}
            <div className={`${styles.bikeCardTag}`}>Self Consumed</div>
            <Card.Body className="px-0">
              <Card.Title className={styles.bkeName}>
                2015 Classic 350 <span>- DL 6T AL 7314</span>
              </Card.Title>
              <Row className={`${styles.bikeDetail} mx-0`}>
                <Col className={styles.detailTxt}>43,384 km</Col>
                <Col className={styles.detailTxt}>1st Owner</Col>
                <Col className={styles.detailTxt}>350 CC</Col>
              </Row>
              <h4 className={styles.price}>₹1,15,000 - ₹1,25,000</h4>
              <p className={styles.dealer}>
                Dealer: <span>(C2N0RJ20FC2N)</span>
              </p>
              <span className={styles.dealerLocation}>
                Neel Motors, Lajpat Nagar, Delhi
              </span>
            </Card.Body>
          </Card>

          <Card className={styles.cardCreMain}>
            <Card.Body className="px-0">
              <div className={styles.creDetails}>
                <h3>CRE Detail</h3>

                <p className={`${styles.creInfo} mb-0`}>
                  Name:<span>John Watson</span>
                </p>

                <p className={`${styles.creInfo} mb-0`}>
                  Number:<span>+91 98765 43210</span>
                </p>
              </div>
              {isButtonVisible && (
                <div className={styles.creBtnBox}>
                  <Button variant="primary" className={styles.downloadBtn}>
                    VIEW
                  </Button>
                  <Button variant="primary" className={styles.detailBtn}>
                    APPROVE
                    <span className={styles.rightArrow}>
                      <AiOutlineRight />
                    </span>
                  </Button>
                </div>
              )}
            </Card.Body>
            {isCardVisible && <ToggleSwitchCard />}
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BikeCardRadio;
