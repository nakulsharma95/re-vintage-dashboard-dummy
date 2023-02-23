import { Card, Col } from "react-bootstrap";
import styles from "./style.module.scss";

export default function CrePerformanceCard(props) {
  return (
    <Card className={styles.crePerformanceCard}>
      <div className={`${styles.cardBody} ${props.cardBodyStyle} py-2`}>
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
  );
}
