import React from "react";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../../../components/common/breadcrumbPrimary";
import Filters from "../../../components/common/filters";
import CrePerformanceMatrix from "../../../components/cre-management/crePerformanceMatrix";
import TabPrimary from "../../../components/common/tabPrimary";
import CreMonthPerformace from "~/components/cre-management/creMonthPerformace";

function CrePerformanceDetails() {
  return (
    <>
      <Breadcrumb
        title="CRE Management"
        addmoretitle="CRE Performance Details"
      />
      <Filters title="CRE Performance Details" />
      <Row>
        <TabPrimary title1="Basic Details" title2="Basic Details" />
        <div className="mb-2 mt-2">Performance</div>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix creTitle="CRE Performance Matrix" />
          <CreMonthPerformace
            performanceTitle="Monthly Performance"
            droptitle={2022}
          />
        </Col>
      </Row>
    </>
  );
}

export default CrePerformanceDetails;
