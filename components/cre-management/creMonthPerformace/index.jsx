import React from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import ThemeDropdown from "~/components/common/themeDropdown";
import styles from "./style.module.scss";

function CreMonthPerformace(props) {
  return (
    <>
      <Card className={styles.performanceCard}>
        <Card.Body className={styles.performanceCardBody}>
          <div className={styles.custumDivide}>
            <div className={styles.performanceCardText}>
              <h3>{props.performanceTitle}</h3>
            </div>

            <div className={styles.dateOuter}>
              <ThemeDropdown
                dropDownTitle="2022"
                dropItem1="2023"
                dropItem2="2024"
                dropItem3="2025"
              />{" "}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreMonthPerformace;
