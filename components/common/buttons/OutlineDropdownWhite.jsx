import Dropdown from 'react-bootstrap/Dropdown';
import styles from './style.module.scss';

export default function OutlineDropdownWhite(props) {
  return (
    <Dropdown className={styles.outlineDropdownMenu}>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className={styles.dropdownToggleWhite}
      >
        {props.dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.outlineOpendropdownWhite}>
        <Dropdown.Item href="#">{props.dropdownMenuTitle}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
