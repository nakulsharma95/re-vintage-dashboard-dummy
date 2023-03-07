import { Dropdown } from 'react-bootstrap';
import styles from './style.module.scss';

function SortByDropdown(props) {
  return (
    <div className={styles.dealFilterMain}>
      <div className={styles.viewPending}>
        <span className="mx-2">{props.title || 'Sort by'}</span>
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
              {props.options.map((option) => (
                <Dropdown.Item href="#" key={option.id}>
                  {option}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default SortByDropdown;
