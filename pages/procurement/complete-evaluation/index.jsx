import React from 'react';
import Filters from '../../../components/common/filters';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';

function CompleteEvaluation() {
  return (
    <>
      <Breadcrumb title="Procurement" addmoretitle="Complete Evaluation" />
      <Filters title="Completed Evaluation" export />
      <div className="bottom-white-border" />
      <CompleteBikeDetail />
    </>
  );
}

export default CompleteEvaluation;
