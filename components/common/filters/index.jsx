import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiRefresh } from 'react-icons/bi';
import Dropdown from 'react-bootstrap/Dropdown';
import { FiSettings } from 'react-icons/fi';
import FilterDropdown from './filterDropdown';
import RedButton from '../buttons/RedButton';
import filterStyle from './style.module.scss';

function Filters(props) {
  return (
    <div className={filterStyle.filtersMain}>
      <div>
        <h3 className={filterStyle.filterHeading}>{props.title}</h3>
        <p className={filterStyle.filterSubTitle}>{props.subTitle}</p>
      </div>
      <div className={filterStyle.filters}>
        {props.bidPrice && (
          <Dropdown className={filterStyle.bidPricDropdown}>
            <Dropdown.Toggle
              variant=""
              id="dropdown-basic"
              className={filterStyle.dropdownToggle}
            >
              Bid Price Logic <FiSettings />
            </Dropdown.Toggle>

            <Dropdown.Menu className={filterStyle.bidPriceDropdownMenu}>
              <div className={filterStyle.bidPriceValue}>
                <div className={filterStyle.title}>
                  Base Price <span>X</span>
                </div>
                <div>
                  <Form.Control type="text" placeholder="Enter a value" />
                </div>
                <div className={filterStyle.title}>%</div>
              </div>
              <div className={filterStyle.bidPricebtn}>
                <RedButton title="Apply" />
              </div>
            </Dropdown.Menu>
          </Dropdown>
        )}
        {props.export && (
          <Button
            variant="primary"
            className={`${filterStyle.filterButton} ${filterStyle.exportButton}`}
          >
            Export data
            <RiShareBoxFill className={filterStyle.filterBtnIcn} />
          </Button>
        )}
        {props.refresh && (
          <Button
            variant="primary"
            className={`${filterStyle.filterButton} ${filterStyle.exportButton}`}
          >
            Refresh bids
            <BiRefresh className={filterStyle.filterBtnIcn} />
          </Button>
        )}
        <Form.Group className={`${filterStyle.formGroup} me-3`}>
          <Form.Control
            type="text"
            placeholder="Search Name, Location, Reference ID"
          />
          <FaSearch className={filterStyle.inputSearch} size={15} />
        </Form.Group>
        <FilterDropdown />
      </div>
    </div>
  );
}

export default Filters;
