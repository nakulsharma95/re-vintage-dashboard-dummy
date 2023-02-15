import { Card, Col } from "react-bootstrap";
import styles from "./style.module.scss";

export default function CrePerformanceCard() {
  const cardData = [
    {
      imageUrl: "/images/bob-Vishwas.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
	  class: styles.bgGray18
    },
    {
      imageUrl: "/images/bob-Vishwas1.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
	  class: styles.bgGray28
    },
    {
      imageUrl: "/images/bob-Vishwas2.png",
      overDue: "evolutionOver",
      class: styles.bgblack40
    },
    {
      imageUrl: "/images/bob-Vishwas3.png",
      overDue: "evolutionOver",
      bikeStatus: "Upload Content",
	  class: styles.bgGray18
    },
  ];
  return (
    <>
      <div>
        <h2 className={styles.Heading}>Cumulative Performance</h2>
      </div>
      {cardData.map((item, index) => (
        <Col xxl={3} lg={6} md={6}>
          <Card className={styles.crePerformanceCard}>
            <div className={`${styles.cardBody} ${item.class} py-2`}>
              <div className={`${styles.cardHead}`}>
                <div className="d-flex justify-content-between">
                  <h2>
                    Procurement Lead <br /> Management
                  </h2>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <h3>
                    Total <br /> Leads Evaluated
                  </h3>
                  <span>93/124</span>
                </div>
              </div>
              <div className={`${styles.divider} w-100`} />
              <div className={`${styles.cardFooter} pt-2 w-100`}>
                <h3>Score Achieved</h3>
                <div>
                  <span className="mx-2">75%</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
}
