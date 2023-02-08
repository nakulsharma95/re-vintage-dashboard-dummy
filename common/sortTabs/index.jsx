import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import styles from "./style.module.scss";
import {
  AiOutlineCheck,
  AiOutlineStop,
  AiOutlineAppstore,
  AiOutlineBars,
} from "react-icons/ai";

export default function SortTabs() {
  return (
    <div className={styles.sortTabBody}>
      <Row>
        <Col className={`${styles.SortInner} gap-3 `} md={10} sm={12}>
          <span className={styles.resultFound}>12 Result Found</span>
          <span
            class={`${styles.divider} w-2px d-sm-block d-none h-18px`}
          ></span>
          <div class="d-flex flex-wrap gap-2">
            <div className={`${styles.bikeCardCheck}`}>
              {" "}
              <Form.Group
                className={`${styles.customCheck} d-flex`}
                controlId="form"
              >
                <Form.Check type="checkbox" label="" />
                <span className="mx-2">Select all</span>
              </Form.Group>
            </div>
            <div class={`${styles.sortSelectedBtn} `}>
              <AiOutlineCheck size={16} />
              <span className="mx-1">Move to OLX</span>
            </div>

            <div class={`${styles.sortSelectedBtn} `}>
              <AiOutlineStop size={16} />
              <span className="mx-1">Move to Inactive</span>
            </div>
          </div>
        </Col>

        <Col
          className={`${styles.SortInner} gap-3 d-flex justify-content-md-end `}
          md={2}
          sm={12}
        >
          <AiOutlineAppstore size={18} />
          <AiOutlineBars size={18} />
        </Col>
      </Row>
    </div>
  );
}
