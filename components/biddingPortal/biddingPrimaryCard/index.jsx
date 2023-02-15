import Link from 'next/link';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BiRupee } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import ArrowButton from '../../common/buttons/ArrowButton';
import ButtonPrimary from '../../common/buttons/ButtonPrimary';
import styles from './style.module.scss';

function BiddingBikeCard(props) {
  const [showSaveBtn, setSaveButton] = useState(false);
  const showSave = () => {
    setSaveButton(true);
  };
  return (
    <Card className={styles.bikeCardCols}>
      <Card.Img
        className={styles.bikeImg}
        variant="top"
        src={props.imageUrl}
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
                {props.highestBidPrice}
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
        {props.redBtn && (
          <div className={styles.cardBtnCols}>
            <ButtonPrimary title="VIEW DETAIL" />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BiddingBikeCard;
