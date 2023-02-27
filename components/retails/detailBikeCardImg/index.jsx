import React from "react";
import { Card, Row, Col,Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Image from "next/image";
import ArrowButton from "~/components/common/buttons/ArrowButton";

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
              <Col xxl={2} xl={3} lg={3} md={3} sm={6} className="col-6">
              <div className={styles.detailImg}>
              <Image
                  src={item.imageUrl}
                  alt="not-found"
                  width="100"
                  height="100"
                />
              </div>
             
              </Col>
            ))}
          </Row>

          <Row>
            <Col md={12}>
            <div className={styles.detailBtnBox}>
              <Button variant="primary" className={styles.downloadBtn}>
              REJECT
              </Button>
              <ArrowButton detailLink="" title="APPROVE" />
            </div>
          
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
