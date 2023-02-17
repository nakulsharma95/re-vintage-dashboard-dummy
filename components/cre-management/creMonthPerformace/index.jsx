import React from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
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
              <Dropdown className={styles.dateDropdown}>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className={styles.dateImg}
                >
                  <span>{props.droptitle}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.dateDropdownMenu}>
                  <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">2024</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">2025</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CreMonthPerformace;
