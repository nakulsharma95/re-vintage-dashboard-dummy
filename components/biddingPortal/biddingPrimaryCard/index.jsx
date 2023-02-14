import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import styles from './style.module.scss';
import ArrowButton from '../../common/buttons/ArrowButton';
import RedButton from '../../common/buttons/RedButton';

function BiddingBikeCard(props) {
  const upcomingBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
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

  const [showSaveBtn, setSaveButton] = useState(false);
  const showSave = () => {
    setSaveButton(true);
  };
  return (
    <Row className="mb-3">
      {upcomingBikeData.map((item) => (
        <Col md={3}>
          <Card className={styles.bikeCardCols}>
            <Card.Img
              className={styles.bikeImg}
              variant="top"
              src={item.imageUrl}
              alt="not-found"
            />
            <Card.Body className={styles.cardPanel}>
              <Card.Title className={styles.bikeName}>
                2015 Classic 350 <span>- DL 6T AL 7314</span>
              </Card.Title>

              <div className={styles.priceList}>
                {props.baseprice && (
                  <div>
                    <div className={styles.sbTitle}>Base Price</div>
                    <div className={styles.bikePrice}>
                      <span>
                        <BiRupee />
                      </span>
                      <input type="text" value="1,25,000.00" name="" id="" />
                      <BsPencil
                        onClick={showSave}
                        className={showSaveBtn ? 'd-none' : ''}
                      />
                      {showSaveBtn && (
                        <Button className={styles.submitBtn}>Save</Button>
                      )}
                    </div>
                  </div>
                )}

                {props.highestBid && (
                  <div className={styles.priceFlex}>
                    <div className={styles.sbTitle}>Highest Bid</div>
                    <div className={styles.bikePrice}>
                      <span>
                        <BiRupee />
                      </span>
                      1,25,000.00
                    </div>
                  </div>
                )}

                {props.closedBid && (
                  <div className={styles.priceFlex}>
                    <div className={styles.closedPriceCols}>
                      <div className={styles.sbTitle}>Highest Bid</div>
                      <div className={styles.bikePrice}>
                        <span>
                          <BiRupee />
                        </span>
                        1,25,000.00
                      </div>
                    </div>
                    <div className={styles.closedPriceCols}>
                      <div className={styles.sbTitle}>Bid By</div>
                      <Link href="/">Neel motors</Link>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.addtionalInfo}>
                <div className="d-flex align-items-center justify-content-between">
                  <span className={styles.infoTitle}>KMs Driven</span>
                  <span className={styles.infoTitle}>Model</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span>48,523 KM</span>
                  <span>2020</span>
                </div>
                <div className={styles.locationText}>
                  <span>Location</span> Mumbai, Maharashtra
                </div>
              </div>
              {props.arrowBtn && (
                <div className={styles.cardBtnCols}>
                  <ArrowButton detailLink="/bike-details" title="BID DETAILS" />
                </div>
              )}
              {props.redBtn && 
                <div className={styles.cardBtnCols}>
                  <RedButton title="VIEW DETAIL" />
                </div>
              }
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default BiddingBikeCard;
