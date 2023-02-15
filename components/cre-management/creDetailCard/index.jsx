import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import styles from "./style.module.scss";
import {
  FaMapMarkerAlt,
  FaRegWindowMaximize,
  FaPhoneAlt,
} from "react-icons/fa";

function CreDetailCard(props) {
  const cardData = [
    {
      imageUrl: "/images/bob-Vishwas.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas1.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas2.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
    {
      imageUrl: "/images/bob-Vishwas3.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
    },
  ];

  return (
    <>
      {cardData.map((item, index) => (
        <Col xxl={3} xl={4} lg={6} key={item.id}>
          <Card className={styles.bikeCardMain}>
            <div className={styles.ChassisImage}>
              <Card.Img variant="top" src={item.imageUrl} />
            </div>

            <div className={`${styles.bikeCardTag}`}>Available</div>

            <Card.Body>
              <Card.Title className={styles.headingName}>
                Bob Vishwas <span className="mx-2">(Senior CRE)</span>
              </Card.Title>

              <div className={styles.location}>
                <FaMapMarkerAlt size={13} />
                <h4>Gurugram, Haryana</h4>
              </div>

              <Button className={styles.downloadBtn}>VIEW DETAILS</Button>
            </Card.Body>
          </Card>

          <Card className={styles.creContactInfo}>
            <Card.Body>
              <div className={styles.contactTitle}>
                <h3>Contact Info</h3>
                <div className={styles.divider}></div>

                <p className={`${styles.creDetail} mb-0`}>
                  <FaPhoneAlt size={13} />
                  <span>+91 98765 43210</span>
                </p>

                <p className={`${styles.creDetail} mb-0`}>
                  <FaRegWindowMaximize size={13} />
                  <span>bobvishwas@royalenfield.com</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default CreDetailCard;
