import Dropdown from 'react-bootstrap/Dropdown';
import styles from './style.module.scss';

export default function OutlineDropdown(props) {
  return (
    <Dropdown className={styles.outlineDropdownMenu}>
      <Dropdown.Toggle variant="" id="dropdown-basic" className={styles.dropdownToggle}>
        {props.dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.outlineOpendropdown}>
        <Dropdown.Item href="#">{props.dropdownMenuTitle}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
