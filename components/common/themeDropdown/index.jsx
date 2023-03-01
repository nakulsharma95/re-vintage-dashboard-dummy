import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from './style.module.scss';

export default function ThemeDropdown(props) {
  return (
    <Dropdown className={styles.dashboardDropdown}>
      <Dropdown.Toggle
        className={styles.dashboardToggle}
        id="dropdown-basic-button"
      >
        {props.dropDownTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownOpenMennu}>
        <Dropdown.Item href="#/action-1">{props.dropItem1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.dropItem2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.dropItem3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
