import React from 'react';
import { Row, Col, Modal, Accordion, Button, Form } from 'react-bootstrap';
import { IoMdClose } from 'react-icons/io';
import CustomCalender from '../../common/customCalender';
import styles from './style.module.scss';

const SelectRescheduleDate = (props) => {
  return (
    <Modal
      show={props.isOpen}
      onHide={props.handleClose}
      centered
      className={`${styles.rescheduleModal} modal-style1 modal-style2`}
      backdropClassName="blur-primary"
    >
      <div className={styles.rescheduleModalBody}>
        <div className={styles.rescheduleHeader}>
          <h3 className={styles.rescheduleTitle}>Reschedule</h3>
          <button
            type="button"
            onClick={props.handleClose}
            className={`${styles.rescheduleCloseBtn}`}
          >
            <IoMdClose color="white" size={20} className="me-1" />
            Close
          </button>
        </div>
        <div className={styles.accordionMain}>
          <Accordion className="vintage-modal-accordion" flush>
            <Accordion.Item eventKey="0" className={styles.accordionItem}>
              <Accordion.Header className={styles.accordionHeader}>
                Select date and time
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <Row>
                  <Col md={6} className={styles.accordionCalSection}>
                    <h5 className={styles.dateSecTitle}>Date</h5>
                    <CustomCalender />
                  </Col>
                  <Col col={6} className={styles.accordionTimeSection}>
                    <h5 className={styles.timeSecTitle}>Time</h5>
                    <div className={styles.timeSlotMain}>
                      <Button variant="primary" className={styles.timeSlotBtn}>
                        10:00 AM - 12:00 PM
                      </Button>
                      <Button
                        variant="primary"
                        className={`${styles.timeSlotBtn} ${styles.activeTimeSlot} `}
                      >
                        12:00 PM - 02:00 PM
                      </Button>
                      <Button variant="primary" className={styles.timeSlotBtn}>
                        10:00 AM - 12:00 PM
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={styles.accordionItem}>
              <Accordion.Header className={styles.accordionHeader}>
                Contact Details
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <Row>
                  <Col md={6} className={styles.contactSection}>
                    <Form className={styles.contactForm}>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className={styles.contactLabel}>
                          Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          className={styles.contactInput}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className={styles.contactLabel}>
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          className={styles.contactInput}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Address">
                        <Form.Label className={styles.contactLabel}>
                          Address
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={4}
                          placeholder="Enter address"
                          className={styles.contactInput}
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col md={6} className={styles.mapSection}>
                    <div className={styles.mapSearchBox}>
                      <Form.Control
                        type="email"
                        placeholder="Search Here"
                        className={styles.mapSearchInput}
                      />
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={styles.accordionItem}>
              <Accordion.Header className={styles.accordionHeader}>
                Reason for Reschedule<span>(Optional)</span>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <Form className={styles.rescheduleRadioSec}>
                  <p className={styles.rescheduleRadio}>
                    <input
                      type="radio"
                      id="test1"
                      name="radio-group"
                      className="form-check-input"
                    />
                    <label htmlFor="test1" className="form-check-label">
                      Customer not interested
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
                      I'm not the owner
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
                      Dolore magna aliqua
                    </label>
                  </p>
                  <p className={styles.rescheduleRadio}>
                    <input
                      type="radio"
                      id="test6"
                      name="radio-group"
                      className="form-check-input"
                    />
                    <label htmlFor="test6" className="form-check-label">
                      Others
                    </label>
                  </p>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className={styles.rescheduleFooter}>
          <Button variant="primary" className={styles.rescheduleFooter}>
            RESCHEDULE
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SelectRescheduleDate;
