import React, { useState } from 'react';
import styles from './style.module.scss';
import { BsPencil } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';

const closerBikeCard = (props) => {
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
  const [showSaveBtn, setSaveButton] = useState(false);
  const showSave = () => {
    setSaveButton(true);
  };
  return (
    <>
      {cardData.map((item, index) => (
        <Col md={3} key={index}>
          <Card className={styles.bikeCardMain}>
            <Card.Img variant="top" src={item.imageUrl} />
            {props.isCheckBoxVisible && (
              <div className={`${styles.bikeCardCheck}`}>
                <Form.Group
                  className={styles.customCheck}
                  controlId={`${index}form`}
                >
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </div>
            )}
            <Card.Body className="px-0">
              <Card.Title className={styles.bkeName}>
                2015 Classic 350 <span>- DL 6T AL 7314</span>
              </Card.Title>
              <Row className={`${styles.bidPrice} mx-0`}>
                {props.acceptPrice ? (
                  <>
                    <Col md={12} className={`${styles.priceTxt} px-0`}>
                      Accepted Price
                    </Col>
                    <Col md={12} className={styles.priceInput}>
                      <span>
                        <BiRupee />
                      </span>
                      <input type="text" value="1,25,000.00" name="" id="" />
                      <BsPencil
                        onClick={showSave}
                        className={showSaveBtn ? 'd-none' : ''}
                      />
                      {showSaveBtn && (
                        <Button className={styles.submitBtn}>Submit</Button>
                      )}
                    </Col>
                  </>
                ) : (
                  <>
                    <Col className={styles.priceTxt}>Highest Bid</Col>
                    <Col className={styles.priceTxtValue}>₹1,25,000.00</Col>
                  </>
                )}
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
              <h5 className={styles.priceTitle}>
                Location: <span>Mumbai, Maharashtra</span>
              </h5>
              {props.status && (
                <div className={styles.statusBox}>
                  <h5 className={styles.priceTitle}>Status:</h5>
                  <h3 className={styles.boxText}>Payment detail pending</h3>
                </div>
              )}

              <div className={styles.btnBox}>
                <div>
                  <Button variant="primary" className={styles.bikeCardBtn}>
                    VIEW DETAILS
                  </Button>
                </div>
                {props.pickupCheck && (
                  <div class="form-check">
                    <input
                      type="checkbox"
                      id="1form"
                      class="form-check-input"
                    />
                    <label title="" for="1form" class="form-check-label">
                      Picked-up
                    </label>
                  </div>
                )}
              </div>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>Contact CSE</Card.Footer>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default closerBikeCard;
