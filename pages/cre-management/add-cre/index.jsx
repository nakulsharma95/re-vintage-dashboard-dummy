import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CreAddForm from '../../../components/cre-management/creAddForm';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';

function AddCre() {
  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="Add CRE" />

      <HeaderPrimary title="CRE Management" subTitle="CRE Management module">
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
      </HeaderPrimary>

      <Row>
        <Col xxl={8} lg={12} md={12}>
          <CreAddForm />
        </Col>
      </Row>
    </>
  );
}

export default AddCre;
