import React, { useState } from 'react';
import Link from 'next/link';
import { Row, Col, Button } from 'react-bootstrap';
import { BiDotsVerticalRounded, BiRupee } from 'react-icons/bi';
import { IoHammer, IoCallOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import Form from 'react-bootstrap/Form';
import { FiCopy } from 'react-icons/fi';
import styles from './style.module.scss';
import ButtonPrimary from '../../common/buttons/ButtonPrimary';
import CustomModal from '../../modals/cancelModal';
import BiddingTimer from '../../biddingPortal/biddingTimer';
import { style } from '@mui/system';

function MotorcycleDetail(props) {
  const [cancelModal, setCancelModal] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);
  const cancelToggleModal = () => {
    setCancelModal(!cancelModal);
  };
  const acceptToggleModal = () => {
    setAcceptModal(!acceptModal);
  };
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

      {/* This section add to closed detail page */}

      {props.isClosedPrice && (
        <div className={styles.closedBidPrice}>
          <div className={styles.motorsDetails}>
            <span>Current highest bid by</span>
            <Button variant="" onClick={cancelToggleModal}>
              {props.highestBidPrice}
            </Button>
          </div>
          <div className="d-flex">
            <div className={styles.priceTag}>
              <BiRupee /> {props.evaluationFootPrice}
            </div>
            <div className={styles.priceBtn}>
              <ButtonPrimary onClick={acceptToggleModal} title="ACCEPT" />
            </div>
          </div>
        </div>
      )}

      <CustomModal
        isOpen={cancelModal}
        handleClose={cancelToggleModal}
        imgUrl="/images/icons/bid-hammer.svg"
        title="Are you sure you want to allocate this bid to Neel Motors?"
      />

      <CustomModal
        isOpen={acceptModal}
        imgUrl="/images/icons/bid-hammer.svg"
        handleClose={acceptToggleModal}
        title="Are you sure you want to accept the bidding price by Neel Motors?"
      />

      {/* end */}

      {/* This section add to Upcoming Bid detail page */}
      {props.isUpcomingBidDetail && (
        <div className={styles.upcomingDetailPrice}>
          <div className={styles.title}>Base Price</div>
          <div className="d-flex">
            <div className={styles.priceCols}>
              <BiRupee /> 1,20,000.00
            </div>
            <div className={styles.upcomingBtn}>
              <Link href="/">Edit</Link>
            </div>
          </div>
          <div className="mt-2">
            <BiddingTimer title="Bidding will active in" timer="02 : 23 : 36" />
          </div>
        </div>
      )}
      {/* end */}

      {/* This section add to Seller Bid detail page */}
      {props.isSellerBidDetail && (
        <div className={styles.sellerDetailPrice}>
          <div className={styles.priceCols}>
            <div className={styles.title}>Base Price: </div> <BiRupee />{' '}
            1,25,000.00
          </div>
          <div className={styles.sellerIdCols}>
            <div className={styles.title}>Seller Portal ID</div>
            <div className={styles.sellerId}>
              <span>CSFDJG54879865</span>
              <Button variant="">
                <FiCopy />
              </Button>
            </div>
          </div>
          <div className={styles.title}>Seller Portal Price</div>
          <div className={styles.sellerIInput}>
            <div className={styles.inputCols}>
              <BiRupee />
              <Form.Control type="text" defaultValue="1,25,000.00" />
            </div>
            <div className={styles.saveBtn}>
              <ButtonPrimary title="SUBMIT" />
            </div>
          </div>
        </div>
      )}
      {/* end */}

      {/* This section add to Under Negotiation Bid detail page */}
      {props.isUnderNegotiationDetail && (
        <div className={styles.underNegDetailPrice}>
          <div className={styles.negPriceList}>
            <div className={styles.negPriceCols}>
              <div className={styles.priceSymbol}>
                <BiRupee />
              </div>
              <div>
                <small>Base Price</small>
                <BiRupee /> 1,20,000.00
              </div>
            </div>
            <div className={styles.negPriceCols}>
              <div className={styles.priceSymbol}>
                <BiRupee />
              </div>
              <div>
                <small>Highest bid</small>
                <BiRupee /> 1,20,000.00
              </div>
            </div>
            <div className={styles.negPriceCols}>
              <div>
                <small>Highest bid by</small>
                <Link href="/">Neel Motors, Lajpat Nagar</Link>
              </div>
            </div>

          </div>

          <div className={styles.cdaPriceMain}>
            <div className={styles.cdaFlex}>
              <div className={styles.title}>Customer Demand</div>
              <div className={styles.priceInput}>
                <BiRupee />
                <Form.Control type="text" defaultValue="1,25,000.00" />
              </div>
              <div className={styles.priceBtn}>
                <Button variant="">Edit</Button>
              </div>
            </div>

            <div className={styles.cdaFlex}>
              <div className={styles.title}>Dealer Offer</div>
              <div className={styles.priceInput}>
                <BiRupee />
                <Form.Control type="text" defaultValue="1,25,000.00" />
              </div>
              <div className={styles.priceBtn}>
                <Button variant="">Edit</Button>
              </div>
            </div>

            <div className={styles.cdaFlex}>
              <div className={styles.title}>Accepted Price</div>
              <div className={styles.priceInput}>
                <BiRupee />
                <Form.Control type="text" defaultValue="1,25,000.00" />
              </div>
              <div className={styles.priceBtn}>
                <Button variant="" className={styles.activeBtn}>Submit</Button>
              </div>
            </div>

          </div>
        </div>
      )}
      {/* end */}
    </div>
  );
}

export default MotorcycleDetail;
