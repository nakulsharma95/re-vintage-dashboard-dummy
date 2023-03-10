import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './style.module.scss';

function CustomCheckBox(props) {
  return (
    <Form.Group
      className={`${styles.checkBox} mb-0 ${props.className}`}
      controlId="formBasicCheckbox"
    >
      <Form.Check
        className="custom-checkbox"
        type="checkbox"
        label={props.checkTitle}
      />
    </Form.Group>
  );
}

export default CustomCheckBox;
