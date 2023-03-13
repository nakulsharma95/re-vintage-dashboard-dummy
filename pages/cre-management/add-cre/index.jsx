import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CreAddForm from '../../../components/cre-management/creAddForm';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import ArrowButton from '../../../components/common/buttons/ArrowButton';

function AddCre() {
  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="Add CRE" />

      <HeaderPrimary title="CRE Management" subTitle="CRE Management module" />

      <Row>
        <Col xxl={8} lg={12} md={12}>
          <CreAddForm />
        </Col>
        <div className="fixed-Footer">
          <div className="mx-3">
            <OutlineButton title="Cancel" className="theme1" />
          </div>
          <div>
            <ArrowButton title="Save" />
          </div>
        </div>
      </Row>
    </>
  );
}

export default AddCre;
