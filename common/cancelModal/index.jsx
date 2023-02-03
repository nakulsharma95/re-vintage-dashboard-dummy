import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from 'react-icons/io';

const CancelModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className={styles.cancelModal}
      >
        <Modal.Header className={styles.cancelModalHeader}>
          <Button
            variant="primary"
            className={`${styles.cancelModalCloseBtn} btn-close`}
          >
            <IoMdClose />
          </Button>
        </Modal.Header>
        <Modal.Body className={styles.cancelModalBody}>
          <img
            src="/images/Group-15036.svg"
            className={styles.cancelModalImage}
          />
          <h4 className={styles.cancelModalTitle}>
            Are you sure you want to reschedule the lead?
          </h4>
        </Modal.Body>
        <Modal.Footer className={styles.cancelModalFooter}>
          <Button
            variant="primary"
            onClick={handleClose}
            className={styles.cancelModalBtn}
          >
            Yes
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className={`${styles.cancelModalBtn} ${styles.redBtn}`}
          >
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CancelModal;
