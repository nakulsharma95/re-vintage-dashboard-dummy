import React from 'react';
import Filters from 'common/filters';
import CompleteBikeDetail from 'common/completeBikeDetail';
import Breadcrumb from 'common/breadCrumb';

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
