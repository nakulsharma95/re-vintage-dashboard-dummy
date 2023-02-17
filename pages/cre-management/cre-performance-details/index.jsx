import React from "react";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "~/components/common/breadcrumbPrimary";
import Filters from "~/components/common/filters";
import CrePerformanceMatrix from "~/components/cre-management/crePerformanceMatrix";
import CreProfileCard from "~/components/cre-management/creProfileCard";
import TabPrimary from "../../../components/common/tabPrimary";

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
        <CrePerformanceMatrix creTitle="CRE Performance Matrix" />
      </Row>
    </>
  );
}

export default CrePerformanceDetails;
