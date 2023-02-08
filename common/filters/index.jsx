import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaFileExport } from 'react-icons/fa';
import filterStyle from './filtersStyle.module.scss';
import FilterDropdown from './FilterDropdown';

function Filters(props) {
  return (
    <div className={filterStyle.filtersMain}>
      <div>
        <h3 className={filterStyle.filterHeading}>{props.title}</h3>
        <p className={filterStyle.filterSubTitle}>{props.subTitle}</p>
      </div>
      <div className={filterStyle.filters}>
        {props.export && (
          <Button
            variant="primary"
            className={`${filterStyle.filterButton} ${filterStyle.exportButton}`}
          >
            Export data
            <FaFileExport className={filterStyle.filterBtnIcn} />
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
