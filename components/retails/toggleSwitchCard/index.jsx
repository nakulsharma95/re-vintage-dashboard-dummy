import React from "react";
import { Card, FormCheck } from "react-bootstrap";
import styles from "./style.module.scss";

export default function ToggleSwitchCard(props) {
  return (
    <div>
      <Card className={styles.toggleCardMain}>
        <Card.Body className="px-0">
          <FormCheck
            className={`${styles.sliderRound} mb-2`}
            id="switchEnabled"
            type="switch"
            label={props.toggleLabal1}
          />

          <FormCheck
            className={styles.sliderRound}
            id="switchEnabled"
            type="switch"
            label={props.toggLelabal1}
          />
        </Card.Body>
      </Card>
    </div>
  );
}
