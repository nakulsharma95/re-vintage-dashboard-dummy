import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import styles from './style.module.scss';

function MobileDealerCard() {
  return (
    <div className={styles.dealerCard}>
      <div className={styles.dealerCardHead}>
        <h5 className={styles.dealerCardTitle}>Neel Motors</h5>
        <p className={styles.dealerCardLocation}>
          <HiOutlineLocationMarker className="mb-2" /> WZ - 1, Nirankari Tower,
          2nd floor, Ganesh Nagar, Opposite metro pillar no. 535, New Delhi -
          110018
        </p>
        <Button variant="" className={styles.dealerCardBtn}>
          VIEW DETAILS
        </Button>
      </div>
      <div className={styles.dealerCardFooter}>
        <p className={styles.dealerContactInfo}>Contact Info</p>
        <hr className={styles.dealerCardFooterLine} />
        <div className="d-flex">
          <p className={`${styles.dealerContactNo} me-3`}>
            <BsTelephone className="mb-1" /> +91 98765 43210
          </p>
          <p className={`${styles.dealerContactNo} ms-3`}>
            <AiOutlineMail className="mb-1" /> delhimotorcycles@royalenfield.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default MobileDealerCard;
