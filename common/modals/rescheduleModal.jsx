/* eslint-disable @next/next/no-img-element */
import { Modal } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import styles from './style.module.scss';

function RescheduleModal(props) {
  return (
    <Modal
      show={props.isOpen}
      onHide={props.handleClose}
      centered
      className={`${styles.cancelModal} modal-style1`}
    >
      <div className={styles.cancelModalBody}>
        <button
          type="button"
          onClick={props.handleClose}
          className={`${styles.cancelModalCloseBtn}`}
        >
          <IoMdClose color="white" size={40} />
        </button>

        <div className="">
          <h4 className={`${styles.cancelModalTitle} text-left`}>
            Please select a reason for reschedule the lead
          </h4>
        </div>
      </div>
    </Modal>
  );
}

export default RescheduleModal;
