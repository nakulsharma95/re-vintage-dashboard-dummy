/* eslint-disable @next/next/no-img-element */
import { Modal, Form, InputGroup, Button } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import { FaAngleRight } from 'react-icons/fa';
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
          <div className={styles.rescheduleFormMain}>
            <Form>
              <p className={styles.rescheduleRadio}>
                <input
                  type="radio"
                  id="test1"
                  name="radio-group"
                  className="form-check-input"
                />
                <label htmlFor="test1" className="form-check-label">
                  Ut enim ad minim veniam
                </label>
              </p>
              <p className={styles.rescheduleRadio}>
                <input
                  type="radio"
                  id="test2"
                  name="radio-group"
                  className="form-check-input"
                />
                <label htmlFor="test2" className="form-check-label">
                  Incididunt ut labore et
                </label>
              </p>
              <p className={styles.rescheduleRadio}>
                <input
                  type="radio"
                  id="test3"
                  name="radio-group"
                  className="form-check-input"
                />
                <label htmlFor="test3" className="form-check-label">
                  Sed do eiusmod tempor
                </label>
              </p>
              <p className={styles.rescheduleRadio}>
                <input
                  type="radio"
                  id="test4"
                  name="radio-group"
                  className="form-check-input"
                />
                <label htmlFor="test4" className="form-check-label">
                  Incididunt ut labore et
                </label>
              </p>
              <p className={styles.rescheduleRadio}>
                <input
                  type="radio"
                  id="test5"
                  name="radio-group"
                  className="form-check-input"
                />
                <label htmlFor="test5" className="form-check-label">
                  Others
                </label>
              </p>
              <InputGroup className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={6}
                  aria-label="With textarea"
                  className={styles.rescheduleTextArea}
                  placeholder="Type here"
                />
              </InputGroup>

              <InputGroup className="justify-content-end">
                <Button variant="primary" className={styles.rescheduleButton}>
                  Submit
                  <FaAngleRight className={styles.rescheduleButtonIcon} />
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default RescheduleModal;
