import React from 'react';
import filterStyle from './filtersStyle.module.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';

const Filters = () => {
  return (
    <>
      <Container>
        <div className={filterStyle.filtersMain}>
          <h3 className={filterStyle.filterHeading}>Procurement Leads</h3>
          <div className={filterStyle.filters}>
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
      </Container>
    </>
  );
};

export default Filters;
