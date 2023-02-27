import Dropdown from 'react-bootstrap/Dropdown';
import styles from './style.module.scss';

export default function OutlineDropdown(props) {
  return (
    <Dropdown className={`${styles.outlineDropdownMenu} ${props.className}`}>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        className={styles.dropdownToggle}
      >
        {props.dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.outlineOpendropdown}>
        {props.options.map((option) => (
          <Dropdown.Item href="#" key={option.id}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
