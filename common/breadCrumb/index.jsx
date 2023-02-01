import React from 'react';
import BreadcrumbStyle from './breadCrumb.module.scss';
import { Row, Col, Container } from 'react-bootstrap';

const Breadcrumb = () => {
  return (
    <>
      <Container>
        <Row className={BreadcrumbStyle.breadcrumbsMain}>
          <Col md={12}>
            <nav className={BreadcrumbStyle.breadcrumbs}>
              <a className={BreadcrumbStyle.breadcrumbsItem}>Home</a>
              <a className={BreadcrumbStyle.breadcrumbsItem}>Procurement</a>
              <a className={BreadcrumbStyle.breadcrumbsItem}>Procurement</a>
            </nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Breadcrumb;
