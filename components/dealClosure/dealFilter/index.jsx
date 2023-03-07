import { Dropdown } from 'react-bootstrap';
import styles from './style.module.scss';

function DealFilter(props) {
  return (
    <div className={styles.dealFilterMain}>
      {props.isViewBy && (
        <div className={styles.viewPending}>
          {props.isNonRe ? '' : <span className="mx-2">View:</span>}

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
