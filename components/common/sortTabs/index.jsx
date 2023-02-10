import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { BiGridAlt, BiListUl, BiCheck } from 'react-icons/bi';
import styles from './style.module.scss';

function SortTabs(props) {
  return (
    <Col md={12} className={styles.sortTabMain}>
      {props.selectAllCheck ? (
        <div className={styles.sortTabCheck}>
          <h5 className={styles.tabCheckTitle}>25 Bids Available</h5>
          <Form.Group className={styles.tabCheck} controlId="formBasicCheckbox">
            <Form.Check className="mb-0" type="checkbox" label="Select all" />
          </Form.Group>
          <Button variant="primary" className={styles.submitCheckBBtn}>
            <BiCheck className={styles.checkBtnIcon} />
            Submit Selected
          </Button>
        </div>
      ) : (
        <div className={styles.sortTabFilter}>
          <p className={`${styles.sortTabFilterBtn} ${styles.activeTab}`}>
            All (25)
          </p>
          <p className={styles.sortTabFilterBtn}>
            Price under negotiation (12)
          </p>
          <p className={styles.sortTabFilterBtn}>Payment detail pending (8)</p>
          <p className={styles.sortTabFilterBtn}>Detail sharing pending (7)</p>
        </div>
      )}

      <div className={styles.sortTabBtnBox}>
        <Button variant="primary" className={styles.viewTabBtn}>
          <BiGridAlt />
        </Button>
        <Button variant="primary" className={styles.viewTabBtn}>
          <BiListUl />
        </Button>
      </div>
    </Col>
  );
}

export default SortTabs;
