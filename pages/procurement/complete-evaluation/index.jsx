import React from 'react';
import Filters from '../../../components/common/filters';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';

function CompleteEvaluation() {
  const completeData = [
    {
      bikeName: '2015 Classic 350',
    },
    {
      bikeName: '2015 Classic 350',
    },
  ];
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Complete Evaluation" />
      <Filters title="Completed Evaluation" export filterInput filterButton />
      <div className="bottom-white-border" />
      <div className="mt-3">
        <DealFilter title="2 Search" />
      </div>
      {completeData.map((item, index) => (
        <CompleteBikeDetail
          data={item}
          key={index}
          isEvalBtnVisible
          isCallerBtnVisible={false}
          isEnquiryNumVisible={false}
        />
      ))}

      <DetailPagination />
    </>
  );
}

export default CompleteEvaluation;
