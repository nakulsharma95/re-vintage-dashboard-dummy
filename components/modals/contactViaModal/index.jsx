/* eslint-disable @next/next/no-img-element */
import { Modal } from 'react-bootstrap';
import { AiFillMail } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMessageSquare, FiPhoneCall } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import styles from './style.module.scss';

function ContactViaModal(props) {
  return (
    <Modal
      show={props.isOpen}
      onHide={props.handleClose}
      centered
      className={`${styles.contactViaModal} modal-style1`}
      backdropClassName="blur-primary"
    >
      <div className={styles.cancelModalBody}>
        <div className={styles.headerStyle}>
          <h4 className={styles.title4}>Contact via</h4>
          <button
            type="button"
            onClick={props.handleClose}
            className={`${styles.cancelModalCloseBtn}`}
          >
            <IoMdClose color="white" size={40} />
          </button>
        </div>

        <div className={styles.contactList}>
          <button type="button" className={styles.listItem}>
            <FiPhoneCall />
            Call
          </button>
          <button type="button" className={styles.listItem}>
            <FiMessageSquare />
            Message
          </button>
          <button type="button" className={styles.listItem}>
            <AiFillMail />
            Mail
          </button>
          <button type="button" className={styles.listItem}>
            <FaWhatsapp />
            Whatsapp
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ContactViaModal;
