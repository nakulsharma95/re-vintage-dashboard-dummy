import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import Image from "next/image";

export default function DetailBikeCardImg() {
  const detailcard = [
    {
      imageUrl: "/images/bikeImage.png",
    },
    {
      imageUrl: "/images/bikeImage2.png",
    },
    {
      imageUrl: "/images/bikeImage3.png",
    },
    {
      imageUrl: "/images/bikeImage4.png",
    },
    {
      imageUrl: "/images/bikeImage2.png",
    },
    {
      imageUrl: "/images/bikeImage4.png",
    },
  ];
  return (
    <div>
      <Card className={styles.detailCard}>
        <Card.Body className={styles.detailCardBody}>
          <Row>
            {detailcard.map((item) => (
              <Col xxl={2} className={styles.detailImg}>
                <Image
                  src={item.imageUrl}
                  alt="not-found"
                  width="100"
                  height="100"
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
