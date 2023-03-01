/* eslint-disable @next/next/no-img-element */
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { IoMdClose } from 'react-icons/io';
import styles from './style.module.scss';

function CancelModal(props) {
  return (
    <Modal
      show={props.isOpen}
      onHide={props.handleClose}
      centered
      className={`${styles.cancelModal} modal-style1`}
      backdropClassName="blur-primary"
    >
      <div className={styles.cancelModalBody}>
        <button
          type="button"
          onClick={props.handleClose}
          className={`${styles.cancelModalCloseBtn}`}
        >
          <IoMdClose color="white" size={40} />
        </button>

        <div className="text-center">
          <img src={props.imgUrl} className={styles.cancelModalImage} alt="" />
          <h4 className={styles.cancelModalTitle}>{props.title}</h4>
        </div>

        <div className={styles.cancelModalFooter}>
          <Button
            variant="primary"
            onClick={props.handleYes}
            className={styles.cancelModalBtn}
          >
            Yes
          </Button>
          <Button
            variant="primary"
            onClick={props.handleNo}
            className={`${styles.cancelModalBtn} ${styles.redBtn}`}
          >
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CancelModal;
