import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import CrePerformanceMatrix from '../../../components/cre-management/crePerformanceMatrix';
import TabPrimary from '../../../components/common/tabPrimary';
import CreMonthPerformace from '../../../components/cre-management/creMonthPerformace';
import HeaderPrimary from '../../../components/common/headerPrimary';
import CreProfileCard from '../../../components/cre-management/creProfileCard';

function CrePerformanceDetails() {
  return (
    <>
      <Breadcrumb
        title="CRE Management"
        addmoretitle="CRE Performance Details"
      />

      <HeaderPrimary title="CRE Performance Details">
        <Filters />
      </HeaderPrimary>
      <Row>
        <Col xxl={12} lg={12} md={12}>
          <CreProfileCard
            droptitle="Action"
            userName="Adesh Goyal"
            available="Available"
            area="Karol Bagh, Delhi"
            mailId="emailaddress@royalenfield.com"
            phoneNumber="+91 98765 43210"
            jobTitle="CRE"
            department="Management"
            ratio="80%"
            joinDate="05 Oct, 2022"
            empNo="RECRE/108"
          />
        </Col>
        <TabPrimary title1="Basic Details" title2="Basic Details" />
        <div className="mb-2 mt-2">Performance</div>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix
            title1="Procurement Lead Management"
            title2="Bidding / First Offer"
            title3="Deal Closure"
            title4="General Query Response"
            creTitle="CRE Performance Matrix"
          />
          <CreMonthPerformace performanceTitle="Monthly Performance" />
        </Col>
      </Row>
    </>
  );
}

export default CrePerformanceDetails;
