import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './style.module.scss';
import { BiDotsVerticalRounded, BiRupee } from 'react-icons/bi';
import Link from 'next/link';

function MotorcycleDetail({
  bikeName,
  headBikeDetail,
  bikeInfo,
  bikeNumber,
  detailMenu,
  chasisNumber,
  detailLocation,
  bikeDetailTitle,
  bikePriceTitle,
  footerPrice,
}) {
  return (
    <div
      className={`${styles.motorcycleDetail} ${styles.completeBorderRight} px-3`}
    >
      <div>
        {headBikeDetail && (
          <h4 className={styles.motorcycleTitle}>
            Motorcycle details <span>- FB29FH9219HR1</span>
          </h4>
        )}
        {bikeInfo && (
          <h2 className={styles.motorcycleName}>
            {bikeName}
            <span> {bikeNumber}</span>
            <small>{chasisNumber}</small>
          </h2>
        )}
        {detailLocation && (
          <div className={styles.bikeDetailLocation}>
            <span>Loacation:</span> Mumbai, Maharashtra
          </div>
        )}

        {detailMenu && (
          <Button variant="" className={styles.bikeDetailInfoIcon}>
            <BiDotsVerticalRounded />
          </Button>
        )}
      </div>
      {bikeDetailTitle && (
        <Row>
          <Col className={styles.motorcycleSpecs}>43,384 km</Col>
          <Col className={styles.motorcycleSpecs}>1st Owner</Col>
          <Col className={styles.motorcycleSpecs}>350 CC</Col>
        </Row>
      )}
      <div className={styles.motorcycleCompleteSpec}>
        <Row className="m-0">
          <Col className="p-0">
            <h5 className={styles.specsHeading}>Owner</h5>
            <p className={styles.specsText}>2nd</p>
          </Col>
          <Col className="p-0">
            <h5 className={styles.specsHeading}>KM</h5>
            <p className={styles.specsText}>35150</p>
          </Col>
          <Col className="p-0">
            <h5 className={styles.specsHeading}>Mileage</h5>
            <p className={styles.specsText}>43.6 kmpl</p>
          </Col>
          <Col md={12} className={`${styles.completeBorderBottom} p-0`} />
          <Col className="p-0">
            <h5 className={`${styles.specsHeading} mt-2`}>Colour</h5>
            <p className={`${styles.specsText} mb-0`}>Red, Chrome</p>
          </Col>
          <Col className="p-0">
            <h5 className={`${styles.specsHeading} mt-2`}>Location</h5>
            <p className={`${styles.specsText} mb-0`}>Delhi</p>
          </Col>
          <Col className="p-0">
            <h5 className={`${styles.specsHeading} mt-2`}>Posting date</h5>
            <p className={`${styles.specsText} mb-0`}>25/08/2022</p>
          </Col>
        </Row>
      </div>

      <div className="d-flex align-items-center mt-3">
        <div className={styles.bikeRupeeIcon}>
          <BiRupee />
        </div>
        <div>
          <h3 className={styles.motorStylePrice}>{bikePriceTitle}</h3>
          <h2 className={styles.motorStylePriceTxt}>1,19,300</h2>
        </div>
      </div>
      {footerPrice && (
        <div className={styles.hgBidCols}>
          <div className={styles.priceTag}>
            <BiRupee /> 1,25,000.00
          </div>
          <div className={styles.motorsDetails}>
            <span>Current highest bid by</span>
            <Link href="/">Neel Motors, Lajpat Nagar, Delhi</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MotorcycleDetail;
