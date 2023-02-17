import React from 'react';
import { Row, Col, Form, Image } from 'react-bootstrap';
import ButtonPrimary from '../../common/buttons/ButtonPrimary';
import OutlineButton from '../../common/buttons/OutlineButton';
import FileUploader from '../../common/fileUploader';
import styles from './style.module.scss';

export default function CreAddForm() {
  return (
    <div className={styles.formInput}>
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Name</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={4} lg={4} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="First name" />
            </Form.Group>
          </Form>
        </Col>

        <Col className={`${styles.inputField}`} xl={4} lg={4} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Last name" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className={styles.inputDivider} />

      <Row>
        <Col
          className={`${styles.inputAlign} mb-3 col-12`}
          xl={4}
          lg={4}
          md={12}
        >
          <span className={styles.inputSpan}>Profile Photo</span>
          <br />
          <span className={styles.inputText}>
            Will be displayed on the profile
          </span>
        </Col>

        <Col className={`${styles.inputField} col-12 `} xl={8} lg={8} md={12}>
          <div className="d-flex">
            <div className={styles.profileImg}>
              <Image src="/images/profile-image.png" alt="not found" />
            </div>
            <FileUploader />
          </div>
        </Col>
      </Row>
      <div className={styles.inputDivider} />

      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Email address</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={4} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email address" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Phone</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={2} lg={2} md={2}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="+91" />
            </Form.Group>
          </Form>
        </Col>

        <Col className={`${styles.inputField}`} xl={6} lg={6} md={6}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="+91 98765 43210" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Current Address</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={4} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="1236/2, D-Block, West Guru Angad Nagar, Laxmi Nagar, New Delhi, Delhi - 110066"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <div className={styles.fixedFooter}>
        <div className="mx-3">
          <OutlineButton title="Cancel" />
        </div>
        <div>
          {' '}
          <ButtonPrimary title="Save" />
        </div>
      </div>
    </div>
  );
}
