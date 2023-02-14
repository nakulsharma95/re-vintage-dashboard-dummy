import React from 'react';
import { Button } from 'react-bootstrap';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import styles from './style.module.scss';

const DealFilter = (props) => {
  return (
    <>
      <div className={styles.dealFilterMain}>
        <h4 className={styles.dealFilterTitle}>{props.title}</h4>
        {props.isSortButton && (
          <div className={styles.sortTabBtnBox}>
            <Button variant="primary" className={styles.viewTabBtn}>
              <BiGridAlt />
            </Button>
            <Button variant="primary" className={styles.viewTabBtn}>
              <BiListUl />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default DealFilter;
