import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaTimes, FaRegClipboard } from 'react-icons/fa';
import { BiPhoneCall } from 'react-icons/bi';
import { BsChatLeft, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';
import styles from './style.module.scss';
import BikeHistory from '../../biddingPortal/bikeHistory';

function PartialLeadsDetail(props) {
  return (
    <Modal
      className="leadsModalMain"
      show={props.isOpen}
      onHide={props.handleClose}
    >
      <Modal.Body className={styles.leadsModalBody}>
        <div className={styles.leadsModalHead}>
          <div className={styles.headFlex}>
            <div className={styles.leftFlexCols}>
              <span>Details</span> - FB29FH9219HR1
            </div>
            <div className={styles.rightFlexCols}>
              <div className={styles.rightCols}>
                <li>
                  <span>Primary source:</span> MIY
                </li>
                <li>
                  <span>Secondary source:</span> Google
                </li>
              </div>
              <Button variant="" onClick={props.handleClose}>
                <FaTimes /> Close
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.userDtails}>
          <div className={styles.userCols}>
            <span>Name</span>
            Neel Motors
          </div>
          <div className={styles.userCols}>
            <span>Contact No.</span>
            +91 98765 43219
          </div>
          <div className={styles.userCols}>
            <span>Email</span>
            john@gmail.com
          </div>
          <div className={styles.userCols}>
            <span>Pincode</span>
            110014
          </div>
        </div>
        <div className={styles.userInfo}>
          <div className={styles.connectUser}>
            <Link href="/">
              <BiPhoneCall /> Call
            </Link>
            <Link href="/">
              <BsChatLeft /> Message
            </Link>
            <Link href="/">
              <FiMail /> Mail
            </Link>
            <Link href="/">
              <BsWhatsapp /> Whatsapp
            </Link>
          </div>
          <div className={styles.connectUser}>
            <Link href="/">
              <FaRegClipboard /> Send evaluation form
            </Link>
          </div>
        </div>
        <div className="mt-5">
          <BikeHistory />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PartialLeadsDetail;
