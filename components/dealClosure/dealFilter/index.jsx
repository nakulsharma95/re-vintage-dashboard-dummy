import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { BiGridAlt, BiListUl } from 'react-icons/bi';
import styles from './style.module.scss';

function DealFilter(props) {
  return (
    <div className={styles.dealFilterMain}>
      <h3 className={styles.singleTitle}>{props.singleTitle}</h3>
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

      {props.isViewBy && (
        <div className={styles.viewPending}>
        { props.isNonRe ?
        "" 
          :
          <span className="mx-2">View:</span> 
          
          }


          <div className={styles.pendingOuter}>
            <Dropdown className={styles.pendingDropdown}>
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className={styles.pendingImg}
              >
                <span>{props.droptitle}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.pendingDropdownMenu}>
                <Dropdown.Item href="#/action-1">Pending 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pending 2</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pending 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default DealFilter;
