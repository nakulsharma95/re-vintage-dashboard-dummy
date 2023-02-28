import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import { BiLocationPlus, BiMailSend, BiPhone } from "react-icons/bi";
import OutlineDropdown from "~/components/common/buttons/OutlineDropdown";

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
                dropdownTitle="Actions"
                options={["Temporary Disable", "Unavailable", "Edit Details"]}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xxl={2} xl={3} lg={12}>
              <div className={styles.performerArea}>
                <BiLocationPlus className={styles.icon} size={20} />
                <span>{props.area}</span>
              </div>
            </Col>

            <Col xxl={3} xl={4} lg={12}>
              <div className={styles.performerArea}>
                <BiMailSend className={styles.icon} size={20} />
                <span>{props.mailId}</span>
              </div>
            </Col>

            <Col xxl={3} xl={4} lg={12}>
              <div className={styles.performerArea}>
                <BiPhone className={styles.icon} size={20} />
                <span>{props.phoneNumber}</span>
              </div>
            </Col>
          </Row>

          <div className={styles.divider}> </div>

          <Row>
            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOB TITLE</h3>
                <p>{props.jobTitle}</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>DEPARTMENT</h3>
                <p>{props.department}</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>CONVERSION RATIO</h3>
                <p>{props.ratio}</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
              <div className={styles.description}>
                <h3>JOINED ON</h3>
                <p>{props.joinDate}</p>
              </div>
            </Col>

            <Col xxl={2} xl={3} lg={4} md={4}>
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
