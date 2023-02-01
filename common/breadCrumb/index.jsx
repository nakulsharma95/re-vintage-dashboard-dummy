import React from 'react';
import BreadcrumbStyle from './breadCrumb.module.scss';
import { Row, Col } from 'react-bootstrap';

const Breadcrumb = () => {
  return (
    <>
      <Row className="my-5">
        <Col md={12}>
          <nav className={BreadcrumbStyle.breadcrumbs}>
            <a className={BreadcrumbStyle.breadcrumbsItem}>Home</a>
            <a className={BreadcrumbStyle.breadcrumbsItem}>Procurement</a>
            <a className={BreadcrumbStyle.breadcrumbsItem}>Procurement</a>
          </nav>
        </Col>
      </Row>
    </>
  );
};

export default Breadcrumb;
