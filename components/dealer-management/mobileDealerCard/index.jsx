import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import styles from './style.module.scss';

function MobileDealerCard(props) {
  return (
    <div className={styles.dealerCard}>
      <div className={styles.dealerCard_container}>
        <div className={styles.dealerCardHead}>
          <h5 className={styles.dealerCardTitle}>{props.title} </h5>
          <p className={styles.dealerCardLocation}>
            <HiOutlineLocationMarker className="mb-2" /> {props.location}{' '}
          </p>
          <button type="button" className={styles.dealerCardBtn}>
            VIEW DETAILS
          </button>
        </div>
        <div className={styles.dealerCardFooter}>
          <p className={styles.dealerContactInfo}>Contact Info</p>
          <hr className={styles.dealerCardFooterLine} />
          <div className="d-flex">
            <p className={`${styles.dealerContactNo} me-3`}>
              <BsTelephone className="mb-1" />
              {props.mobile}{' '}
            </p>
            <p className={`${styles.dealerContactNo} ms-3`}>
              <AiOutlineMail className="mb-1" />
              {props.email}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileDealerCard;
