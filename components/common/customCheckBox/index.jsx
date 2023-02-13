import React from "react";
import { Form } from "react-bootstrap";
import styles from "./style.module.scss";

function CustomCheckBox() {
  return (
    <Form.Group class={`${styles.checkBox} mb-0`} controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="" />
    </Form.Group>
  );
}

export default CustomCheckBox;
