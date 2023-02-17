import React from "react";
import { Row, Col, Card, Button, Image, Dropdown } from "react-bootstrap";
import styles from "./style.module.scss";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";

function CreProfileCard(props) {
  return (
    <Row className={styles.profileCardHead}>
      <Col md={3}>
        <div className={styles.profileImg}>
          <img src="/images/cre-profile-card.png" alt="" />
        </div>
      </Col>
      <Col md={9}>
        <div className={styles.performerDetails}>
          <Row>
            <Col md={6}>
              <div className={styles.performerDetailsHead}>
                <div className="d-flex">
                  <h3>Adesh Goyal</h3>

                  <p className={styles.availableTag}>Available</p>
                </div>
              </div>
            </Col>
            <Col md={6}></Col>
          </Row>
          <Row className="mt-5">
            <Col xxl={2} xl={3} lg={12}>
              <div className={styles.performerArea}>
                <BiLocationPlus className={styles.icon} size={20} />
                <span>Karol Bagh, Delhi</span>
              </div>
            </Col>

            <Col xxl={3} xl={4} lg={12}>
              <div className={styles.performerArea}>
                <BiMailSend className={styles.icon} size={20} />
                <span>emailaddress@royalenfield.com</span>
              </div>
            </Col>

            <Col xxl={3} xl={4} lg={12}>
              <div className={styles.performerArea}>
                <BiPhone className={styles.icon} size={20} />
                <span>+91 98765 43210</span>
              </div>
            </Col>
          </Row>

          <div className={styles.divider}> </div>

          <Row>
            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOB TITLE</h3>
                <p>CRE</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>DEPARTMENT</h3>
                <p>Management</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>CONVERSION RATIO</h3>
                <p>80%</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOINED ON</h3>
                <p>05 Oct, 2022</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>EMP NO.</h3>
                <p>RECRE/108</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default CreProfileCard;
