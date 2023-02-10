import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { CiFilter } from 'react-icons/ci';
import { BsChevronUp, BsSearch } from 'react-icons/bs';
import RedButton from '../../buttons/RedButton';
import styles from './style.module.scss';

function FilterDropdown() {
  return (
    <div className={`${styles.filterDropdownStyle}`}>
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          className={styles.filterButton}
          id="dropdown-basic"
        >
          Filter
          <CiFilter className={styles.filterBtnIcn} size={17} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.dropdownMenu}>
          <div className={styles.titleFlex}>
            <div className={styles.title}>Filters</div>
            <Button variant="">Reset All</Button>
          </div>
          <div className={styles.filterPanelMain}>
            <div className={styles.filterPanel}>
              <div className={styles.title}>
                Zone
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Check type="checkbox" id="northzone" label="North Zone" />
              <Form.Check type="checkbox" id="eastzone" label="East Zone" />
              <Form.Check type="checkbox" id="westzone" label="West Zone" />
              <Form.Check type="checkbox" id="southzone" label="South Zone" />
            </div>
            <div className={styles.filterPanel}>
              <div className={styles.title}>
                State
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Select>
                <option>Select State</option>
                <option value="1">Delhi</option>
                <option value="2">Mumbai</option>
                <option value="3">Chennai</option>
              </Form.Select>
            </div>
            <div className={styles.filterPanel}>
              <div className={styles.title}>
                City
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Control
                type="text"
                id=""
                placeholder="Search City"
                className={styles.formControl}
              />
              <Button variant="" className={styles.searchBtn}>
                <BsSearch />
              </Button>
            </div>
            <div className={styles.filterPanel}>
              <div className={styles.title}>
                Registration Number
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Control
                type="text"
                id=""
                placeholder="Ex. DL"
                className={styles.formControl}
              />
              <Button variant="" className={styles.searchBtn}>
                <BsSearch />
              </Button>
            </div>
            <div className={styles.filterBtnCols}>
              <RedButton title="Apply" />
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterDropdown;
