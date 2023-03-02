import React from 'react';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';
import DealFilter from '../../components/dealClosure/dealFilter';
import ReportAccordian from '../../components/report/reportAccordian';

function Report() {
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
	  <hr/>
	  <DealFilter title="4 feedbacks found" />
	  <ReportAccordian/>
	</div>
  )
}

export default Report