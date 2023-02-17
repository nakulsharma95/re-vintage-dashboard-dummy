import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CreAddForm from '../../../components/cre-management/creAddForm';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';

function AddCre() {
  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="Add CRE" />
      <Filters
        filterInput
        title="CRE Management"
        subTitle="CRE Management module"
      />
      <Row>
        <Col xxl={8} lg={12} md={12}>
          <CreAddForm />
        </Col>
      </Row>
    </>
  );
}

export default AddCre;
