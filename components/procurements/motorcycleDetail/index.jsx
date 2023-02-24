import React from 'react';
import Link from 'next/link';
import { Row, Col, Button } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiRupee } from 'react-icons/bi';
import { IoHammer, IoCallOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import styles from './style.module.scss';

function MotorcycleDetail(props) {
  return (
    <div
      className={`${styles.motorcycleDetail} ${styles.completeBorderRight} px-3`}
    >
      <div>
        {props.headBikeDetail && (
          <h4 className={styles.motorcycleTitle}>
            Motorcycle details <span>- {props.bikeCode}</span>
          </h4>
        )}
        {props.bikeInfo && (
          <h2 className={styles.motorcycleName}>
            {props.bikeName}
            <span> {props.bikeNumber}</span>
            <small> {props.chasisNumber}</small>
          </h2>
        )}
        {props.detailLocation && (
          <div className={styles.bikeDetailLocation}>
            <span>Loacation:</span> {props.bikeLocation}
          </div>
        )}

        {props.detailMenu && (
          <Button variant="" className={styles.bikeDetailInfoIcon}>
            <BiDotsVerticalRounded />
          </Button>
        )}
      </div>
      {props.bikeDetailTitle && (
        <Row className="mt-3">
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

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex align-items-center ">
          <div className={styles.bikeRupeeIcon}>
            <BiRupee />
          </div>
          <div>
            <h3 className={styles.motorStylePrice}>{props.priceTitle}</h3>
            <h2 className={styles.motorStylePriceTxt}>
              {props.evaluationPrice}
            </h2>
          </div>
        </div>
        {props.dealerDetails && (
          <div className={styles.bike_dealerPrice}>
            <div className={styles.bikeRupeeIcon}>
              <BiRupee />
            </div>
            <div>
              <h3 className={styles.motorStylePrice}>{props.priceTitle2}</h3>
              <h2 className={styles.motorStylePriceTxt}>{props.dealerPrice}</h2>
            </div>
          </div>
        )}

        {props.isEnquiryNumVisible && (
          <div className="d-flex align-items-center">
            <div>
              <h3 className={styles.motorStylePrice}>MSD enquiry number</h3>
              <h2 className={styles.motorStylePriceTxt}>{props.msdEnquery}</h2>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3">
        {props.dealerDetails && (
          <div className={styles.dealerDetails}>
            <p>
              Dealer:<span>{props.dealerName}</span>
            </p>
            <hr className={styles.dealerDetails_line} />
            <Row className={styles.dealerDetails_lists}>
              <Col className={styles.dealerDetails_list}>
                {' '}
                <IoHammer className={styles.list_icon} /> Bid Details
              </Col>
              <Col className={styles.dealerDetails_list}>
                <IoCallOutline className={styles.list_icon} /> Call Dealer
              </Col>
              <Col className={styles.dealerDetails_list}>
                <IoCallOutline className={styles.list_icon} />
                Call CRE
              </Col>
              <Col>
                <RxCross2 className={styles.list_icon} />
                Drop
              </Col>
            </Row>
          </div>
        )}
      </div>

      {props.footerPrice && (
        <div className={styles.hgBidCols}>
          <div className={styles.priceTag}>
            <BiRupee /> {props.evaluationFootPrice}
          </div>
          <div className={styles.motorsDetails}>
            <span>Current highest bid by</span>
            <Link href="/">{props.highestBidPrice}</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default MotorcycleDetail;
