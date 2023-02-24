import Image from 'react-bootstrap/Image';
import { BsBell } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { RiMenu2Fill } from 'react-icons/ri';
import styles from './style.module.scss';

export default function Header(props) {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerFlex}>
          <div className={styles.logo}>
            <Image src="/images/logo.svg" alt="not-found" />
          </div>
          <div className={styles.headRightSec}>
            <div className={styles.notifications}>
              <BsBell />
              <span className={styles.notiNumber}>0</span>
            </div>
            <div className={styles.userProfile}>
              <Dropdown className={styles.userDropdown}>
                <Dropdown.Toggle
                  variant=""
                  id="dropdown-basic"
                  className={styles.userImg}
                >
                  <Image src="/images/profile-3.png" alt="not-found" />
                  <span>John Doe</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles.userDropdownMenu}>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <button
              type="button"
              onClick={props.toggleHandler}
              className={styles.toggleButton}
            >
              <RiMenu2Fill color="white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
