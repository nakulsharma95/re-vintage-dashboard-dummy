import React from 'react';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';
import ReportAccordian from '../../components/report/reportAccordian';

function ContactPage() {
  return (
    <div>
      <Breadcrumb title="Feedbacks" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Feedbacks"
        subTitle="Here you’ll find the feedbacks from the customers."
      >
        <SearchPrimary placeholder="Search feedbacks" />
        <FilterButton />
      </HeaderPrimary>
      <hr />

      <div className="action-list-style">
        <div className="left-sec">
          <h5 className="title3">4 feedbacks found</h5>
        </div>
      </div>
      <ReportAccordian />
    </div>
  );
}

export default ContactPage;
