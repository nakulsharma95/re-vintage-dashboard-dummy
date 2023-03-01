import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CreAddForm from '../../../components/cre-management/creAddForm';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import OutlineButton from '~/components/common/buttons/OutlineButton';
import ButtonPrimary from '~/components/common/buttons/ButtonPrimary';

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
        <div className="fixed-Footer">
        <div className="mx-3">
          <OutlineButton title="Cancel" className="theme1" />
        </div>
        <div>
          {' '}
          <ButtonPrimary title="Save" />
        </div>
      </div>
      </Row>
    </>
  );
}

export default AddCre;
