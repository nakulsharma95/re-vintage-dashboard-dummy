import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaFileExport } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import filterStyle from './filtersStyle.module.scss';

function Filters(props) {
  return (
    <div className={filterStyle.filtersMain}>
<<<<<<< HEAD
      <h3 className={filterStyle.filterHeading}>{props.title}</h3>
=======
      <h1 className={filterStyle.filterHeading}>Procurement Leads</h1>
>>>>>>> c680e4dd91b87cba7eba11b272b5061ca454e922
      <div className={filterStyle.filters}>
        <Button
          variant="primary"
          className={`${filterStyle.filterButton} ${filterStyle.exportButton} ${
            props.export == true ? 'filtersStyle_activeBtn__9qsNe' : ''
          }`}
        >
          Export data
          <FaFileExport className={filterStyle.filterBtnIcn} />
        </Button>
        <Form.Group className={`${filterStyle.formGroup} me-3`}>
          <Form.Control
            type="text"
            placeholder="Search Name, Location, Reference ID"
          />
          <FaSearch className={filterStyle.inputSearch} />
        </Form.Group>
        <Button variant="primary" className={filterStyle.filterButton}>
          Filter
          <CiFilter className={filterStyle.filterBtnIcn} />
        </Button>
      </div>
    </div>
  );
}

export default Filters;
