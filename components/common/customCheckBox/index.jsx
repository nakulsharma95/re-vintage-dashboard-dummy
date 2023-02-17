import React from "react";
import { Form } from "react-bootstrap";
import styles from "./style.module.scss";

function CustomCheckBox(props) {
  return (
    <Form.Group class={`${styles.checkBox} mb-0`} controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label={props.checkTitle} />
    </Form.Group>
  );
}

export default CustomCheckBox;
