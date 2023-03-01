import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import {
  MdOutlineClose,
  MdErrorOutline,
  MdCheckCircleOutline,
} from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import BikeCardFooter from '../../components/common/cardFooter';
import Bids from '../../components/biddingPortal/bids';
import BikeDetailTitle from '../../components/common/detailHeader';
import BikeHistory from '../../components/biddingPortal/bikeHistory';
import BikeInspection from '../../components/biddingPortal/bikeInspection';
import styles from './style.module.scss';
import BackButton from '../../components/common/buttons/BackButton';
import BikeSlider from '../../components/common/thumbnailSlider';
import MotorcycleDetail from '../../components/procurements/motorcycleDetail';

export default function BiddingDetails(props) {
  const bikeDetailData = [
    {
      bikeName: 'HUNTER 350',
      bikeNumber: '- DL6SEP7845',
      chasisNumber: '- B28EG192BR19',
      bikeLocation: 'Mumbai, Maharashtra',
      priceTitle: 'Base Price',
      evaluationPrice: '1,20,000.00',
      evaluationFootPrice: '1,25,000.00',
      highestBidPrice: 'Neel Motors, Lajpat Nagar, Delhi',
    },
  ];

  const cardFootData = [
    {
      detailTitle: 'SAMIL Details',
      userTitle: 'Name',
      name: 'Ashok Sharma',
      idTitle: 'SAMIL ID',
      caseId: 'ASHS45125',
      contactText: 'Contact No.',
      contact: '+91 9899645875',
    },
    {
      detailTitle: 'CRE Details',
      userTitle: 'Name',
      name: 'Rishabh Sharma',
      contactText: 'Contact No.',
      contact: '+91 9899645875',
    },
    {
      detailTitle: 'Owner Details',
      contactText: 'Contact No.',
      contact: '+91 9899645875',
    },
  ];

  return (
    <div>
      <BackButton backLink="/bidding-portal" title="Back" />
      <BikeDetailTitle
        title="Motorcycle Details"
        smtitle="Please find all the necessary details below"
        statusTitle="Up for bid"
        bidStatus
      />
      <div className={styles.bikeDetailContainer}>
        <Row>
          <Col md={6}>
            <BikeSlider />
          </Col>
          {bikeDetailData.map((item) => (
            <Col md={6}>
              <MotorcycleDetail
                bikeInfo
                detailMenu
                detailLocation
                footerPrice
                bikeName={item.bikeName}
                bikeNumber={item.bikeNumber}
                chasisNumber={item.chasisNumber}
                bikeLocation={item.bikeLocation}
                priceTitle={item.priceTitle}
                evaluationPrice={item.evaluationPrice}
                evaluationFootPrice={item.evaluationFootPrice}
                highestBidPrice={item.highestBidPrice}
              />
            </Col>
          ))}
        </Row>
        <div className="re-detailFootBg">
          {cardFootData.map((item) => (
            <BikeCardFooter
              userTitle={item.userTitle}
              caseId={item.caseId}
              contactText={item.contactText}
              detailTitle={item.detailTitle}
              name={item.name}
              idTitle={item.idTitle}
              contact={item.contact}
            />
          ))}
        </div>

        {props.bikeContact && (
          <div className={styles.contactCols}>
            <li>
              <Link href="/">
                <FiPhone /> Call Owner
              </Link>
            </li>
            <li>
              <Link href="/">
                <FiPhone /> Call Dealer
              </Link>
            </li>
            <li>
              <Link href="/">
                <MdOutlineClose /> Drop Negotiation
              </Link>
            </li>
          </div>
        )}
      </div>
      {props.bikeSendDetail && (
        <div className={styles.detailSendCols}>
          <li>
            <MdCheckCircleOutline style={{ color: '#36942f' }} /> Send{' '}
            <Link href="/" className={styles.sendLink}>
              ‘Payment detail link’
            </Link>{' '}
            to Customer <Link href="/">- Send</Link>
          </li>
          <li>
            <MdErrorOutline style={{ color: '#f59e0b' }} /> Send{' '}
            <Link href="/" className={styles.sendLink}>
              ‘Payment detail link’
            </Link>{' '}
            to Customer <Link href="/">- Send</Link>
          </li>
          <li>
            <MdErrorOutline style={{ color: '#f59e0b' }} /> Send Customer
            details to Dealer <Link href="/">- Send</Link>
          </li>
        </div>
      )}
      <Bids />
      <BikeInspection />
      <BikeHistory />
    </div>
  );
}
