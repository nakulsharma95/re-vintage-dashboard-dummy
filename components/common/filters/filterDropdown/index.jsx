import React from 'react';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { CiFilter } from 'react-icons/ci';
import { BsChevronUp, BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import filterStyle from './style.module.scss';
import RedButton from '../../buttons/RedButton';

function FilterDropdown() {
  return (
    <div className={filterStyle.filterDropdown}>
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          className={filterStyle.filterButton}
          id="dropdown-basic"
        >
          Filter
          <CiFilter className={filterStyle.filterBtnIcn} size={17} />
        </Dropdown.Toggle>

        <Dropdown.Menu className={filterStyle.dropdownMenu}>
          <div className={filterStyle.titleFlex}>
            <div className={filterStyle.title}>Filters</div>
            <Button variant="">Reset All</Button>
          </div>
          <div className={filterStyle.filterPanelMain}>
            <div className={filterStyle.filterPanel}>
              <div className={filterStyle.title}>
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
            <div className={filterStyle.filterPanel}>
              <div className={filterStyle.title}>
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
            <div className={filterStyle.filterPanel}>
              <div className={filterStyle.title}>
                City
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Control
                type="text"
                id=""
                placeholder="Search City"
                className={filterStyle.formControl}
              />
              <Button variant="" className={filterStyle.searchBtn}>
                <BsSearch />
              </Button>
            </div>
            <div className={filterStyle.filterPanel}>
              <div className={filterStyle.title}>
                Registration Number
                <span>
                  <BsChevronUp />
                </span>
              </div>
              <Form.Control
                type="text"
                id=""
                placeholder="Ex. DL"
                className={filterStyle.formControl}
              />
              <Button variant="" className={filterStyle.searchBtn}>
                <BsSearch />
              </Button>
            </div>
            <div className={filterStyle.filterBtnCols}>
              <RedButton title="Apply" />
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterDropdown;
