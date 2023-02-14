import React from 'react';
import Filters from '../../../components/common/filters';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';

function CompleteEvaluation() {
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Complete Evaluation" />
      <Filters title="Completed Evaluation" export />
      <div className="bottom-white-border" />
      <CompleteBikeDetail isEvalBtnVisible={true}  isCallerBtnVisible={false} isEnquiryNumVisible={false}/>
      <DetailPagination />
    </>
  );
}

export default CompleteEvaluation;
