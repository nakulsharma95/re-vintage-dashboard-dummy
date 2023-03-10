import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ButtonPrimary from '../../common/buttons/ButtonPrimary';
import CustomCalender from '../../common/customCalender';

import styles from './style.module.scss';

function BookAppoinmentForm() {
  return (
    <div className={styles.bookAppoinmentForm}>
      <Form className={styles.contactForm}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className={styles.contactLabel}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Neel Motors"
            className={styles.contactInput}
          />
        </Form.Group>

        <div className="mb-3 d-flex ">
          <div className="me-3 d-none d-lg-block">
            <Form.Label className={`${styles.contactLabel} `}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe4578@gmail.com"
              className={styles.contactInput}
            />
          </div>
          <div>
            <Form.Label className={styles.contactLabel}>
              Phone number
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="+91 98765 43210"
              className={styles.contactInput}
            />
          </div>
        </div>

        <Form.Group className="mb-3" controlId="Address">
          <Form.Label className={styles.contactLabel}>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter addressNo F 29/2, Phase 2, Okhla Industrial Area, Okhla Industrial Area, New Delhi -110020"
            className={`${styles.contactInput} ${styles.contactTextArea}`}
          />
        </Form.Group>
      </Form>
      <hr />
      <p className={styles.calenderTitle}>Select date and time</p>
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
      <hr />
      <Form.Check
        className={styles.BookAppoinmentCheck}
        checked
        type="checkbox"
        label="I want to use this motorcycle for self consumption."
      />
      <div className={styles.BookAppoinmentButton}>
        <ButtonPrimary title="BOOK NOW" />
      </div>
    </div>
  );
}

export default BookAppoinmentForm;
