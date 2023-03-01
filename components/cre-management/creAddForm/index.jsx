import React from 'react';
import { Row, Col, Form, Image } from 'react-bootstrap';
import FileUploader from '../../common/fileUploader';
import ButtonPrimary from '../../common/buttons/ButtonPrimary';
import OutlineButton from '../../common/buttons/OutlineButton';
import styles from './style.module.scss';

export default function CreAddForm() {
  return (
    <div className={styles.formInput}>
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Name</span>
        </Col>

        <Col className={`${styles.inputField}  col-6`} xl={4} lg={4} md={6}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="First name" />
            </Form.Group>
          </Form>
        </Col>

        <Col className={`${styles.inputField} col-6`} xl={4} lg={4} md={6}>
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
          <span className={styles.inputSpan}>Date of Birth</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="29/08/2022" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Phone</span>
        </Col>

        <Col className={`${styles.inputField} col-6 `} xl={2} lg={2} md={6}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="+91" />
            </Form.Group>
          </Form>
        </Col>

        <Col className={`${styles.inputField} col-6`} xl={6} lg={6} md={6}>
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
          <span className={styles.inputSpan}>State and city</span>
        </Col>

        <Col className={`${styles.inputField}  col-6`} xl={4} lg={4} md={6}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Delhi" />
            </Form.Group>
          </Form>
        </Col>

        <Col className={`${styles.inputField} col-6`} xl={4} lg={4} md={6}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="New Delhi" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Gender</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Male" />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Marital Status</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <Form>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Single" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <div className={styles.inputDivider} />

      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Current Address</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="1236/2, D-Block, West Guru Angad Nagar, Laxmi Nagar, New Delhi, Delhi - 110066"
            rows="3"
          />
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>Permanent Address</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="1236/2, D-Block, West Guru Angad Nagar, Laxmi Nagar, New Delhi, Delhi - 110066"
            rows="3"
          />
        </Col>
      </Row>
      <div className={styles.inputDivider} />
      <Row>
        <Col className={`${styles.labalAlign}`} xl={4} lg={4} md={12}>
          <span className={styles.inputSpan}>About</span>
        </Col>

        <Col className={`${styles.inputField} `} xl={8} lg={8} md={12}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            rows="3"
          />

          <div className="text-area-character">10 character left</div>
        </Col>
      </Row>

      <div className={styles.fixedFooter}>
        <div className="mx-3">
          <OutlineButton title="Cancel" className="theme1" />
        </div>
        <div>
          {' '}
          <ButtonPrimary title="Save" />
        </div>
      </div>
    </div>
  );
}
