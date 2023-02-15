import React from 'react';
import { Row } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import Filters from '../../components/common/filters';
import CreDetailCard from '../../components/cre-management/creDetailCard';
import DealFilter from '../../components/dealClosure/dealFilter';
import CrePerformanceCard from '../../components/cre-management/crePerformanceCard';

function CreManagement() {
  return (
    <>
      <Breadcrumb title="CRE Management" addmoretitle="CRE Management" />
      <Filters title="CRE Management" subTitle="CRE Management module" />
      <div className="bottom-white-border mt-3 mb-3" />
      <DealFilter title="Available CRE(s)" droptitle="Top Performer" isViewBy />
      <Row>
        <CreDetailCard />
        <CrePerformanceCard />
      </Row>
    </>
  );
}

export default CreManagement;
