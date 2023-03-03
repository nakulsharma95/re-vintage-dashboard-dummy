import Link from 'next/link';
import { useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { BiRupee } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';
import CustomCheckBox from '../../common/customCheckBox';
import ArrowButton from '../../common/buttons/ArrowButton';
import styles from './style.module.scss';

function BiddingBikeCard(props) {
  const [showSaveBtn, setSaveButton] = useState(false);
  const showSave = () => {
    setSaveButton(true);
  };
  return (
    <Card className={styles.bikeCardCols}>
      <div className={`${styles.bikeImg} ${props.className}`}>
        <Image variant="top" src={props.imageUrl} alt="not-found" />
      </div>
      {props.isClosedTitle && (
        <div className={styles.closedBidTitle}>
          {props.closedBikeName} <br /> <span>{props.closedBikeNumber}</span>
        </div>
      )}

      {props.isCheckbox && (
        <div className={styles.selectBoxCheck}>
          <CustomCheckBox />
        </div>
      )}

      <Card.Body className={styles.cardPanel}>
        {props.isCardTitle && (
          <Card.Title className={styles.bikeName}>
            {props.bikeName} <span>- {props.bikeNumber}</span>
          </Card.Title>
        )}

        <div className={styles.priceList}>
          {props.baseprice && (
            <div>
              <div className={styles.sbTitle}>Base Price</div>
              <div className={styles.bikePrice}>
                <span>
                  <BiRupee />
                </span>
                <input type="text" defaultValue="1,25,000.00" name="" id="" />
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
              <div className={styles.sbTitle}>{props.bidTitle}</div>
              <div className={styles.bikePrice}>
                {props.highestBidSymbol && (
                  <span>
                    <BiRupee />
                  </span>
                )}
                {props.highestBidPrice}
              </div>
            </div>
          )}

          {props.closedBid && (
            <div className={styles.priceFlex}>
              <div className={styles.closedPriceCols}>
                <div className={styles.sbTitle}>{props.bidTitle}</div>
                <div className={styles.bikeClosedPrice}>
                  {props.highestBidSymbol && (
                    <span>
                      <BiRupee />
                    </span>
                  )}
                  {props.highestClosedBidPrice}
                </div>
              </div>
              <div className={styles.closedPriceCols}>
                <div className={styles.sbTitle}>Bid By</div>
                <Link href="/">{props.motorShopName}</Link>
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
            <span>{props.kmDrive} KM</span>
            <span>{props.modelYear}</span>
          </div>
          <div className={styles.locationText}>
            <span>Location</span> {props.location}
          </div>
        </div>
        {props.arrowBtn && (
          <div className={styles.cardBtnCols}>
            <ArrowButton detailLink="/bike-details" title="BID DETAILS" />
          </div>
        )}
        {props.redBtn && (
          <div className={styles.cardBtnCols}>
            <ArrowButton detailLink="/bike-details" title="VIEW DETAILS" />
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default BiddingBikeCard;
