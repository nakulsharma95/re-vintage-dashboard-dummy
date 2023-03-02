/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";
import styles from "./style.module.scss";
import OutlineDropdown from "../../common/buttons/OutlineDropdown";

function CreProfileCard(props) {
  return (
    <Row className={styles.profileCardHead}>
      <Col className="p-md-0" xxl={3} xl={3} lg={4}>
        <div className={styles.profileImg}>
          <img src="/images/cre-profile-card.png" alt="" />
        </div>
      </Col>
      <Col xxl={9} xl={9} lg={8}>
        <div className={styles.performerDetails}>
          <Row>
            <Col md={6}>
              <div className={styles.performerDetailsHead}>
                <div className="d-flex">
                  <h3>{props.userName}</h3>

                  <p className={styles.availableTag}>{props.available}</p>
                </div>
              </div>
            </Col>
            <Col
              className="d-flex align-items-center justify-content-end"
              md={6}
            >
              {" "}
              <OutlineDropdown
                className={styles.displayAction}
                dropdownTitle="Actions"
                options={["Temporary Disable", "Unavailable", "Edit Details"]}
              />
            </Col>
          </Row>
          <Row className="mt-md-5 mt-4">
            <Col xxl={3} xl={3} lg={6} md={6}>
              <div className={styles.performerArea}>
                <BiLocationPlus className={styles.icon} size={20} />
                <span>{props.area}</span>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={6} md={6}>
              <div className={styles.performerArea}>
                <BiMailSend className={styles.icon} size={20} />
                <span>{props.mailId}</span>
              </div>
            </Col>

            <Col xxl={4} xl={4} lg={6} md={6}>
              <div className={styles.performerArea}>
                <BiPhone className={styles.icon} size={20} />
                <span>{props.phoneNumber}</span>
              </div>
            </Col>
          </Row>

          <div className={styles.divider}> </div>

          <Row>
            <Col className="col-6" xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOB TITLE</h3>
                <p>{props.jobTitle}</p>
              </div>
            </Col>

            <Col className="col-6" xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>DEPARTMENT</h3>
                <p>{props.department}</p>
              </div>
            </Col>

            <Col className="col-6" xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>CONVERSION RATIO</h3>
                <p>{props.ratio}</p>
              </div>
            </Col>

            <Col className="col-6" xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOINED ON</h3>
                <p>{props.joinDate}</p>
              </div>
            </Col>

            <Col className="col-6" xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>EMP NO.</h3>
                <p>{props.empNo}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default CreProfileCard;
