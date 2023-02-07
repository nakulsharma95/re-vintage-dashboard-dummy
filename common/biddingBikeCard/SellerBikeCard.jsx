import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import styles from './style.module.scss';
import ArrowButton from 'common/buttons/ArrowButton';

function SellerBikeCard() {
  const activeBikeData = [
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
  return (
    <Row>
      {activeBikeData.map((item, index) => (      
        <Col md={3} key={index}>
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
                <div className={styles.priceFlex}>
                <div className={styles.sbTitle}>Highest Bid</div>
                  <div className={styles.bikePrice}>
                    <span>
                      <BiRupee />
                    </span>
                    1,25,000.00
                  </div>
                </div>
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
              <ArrowButton title="View Details" />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>    
  );
}
  
export default SellerBikeCard;
