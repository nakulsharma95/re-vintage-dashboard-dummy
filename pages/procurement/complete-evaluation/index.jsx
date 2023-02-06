import React from 'react';
import Breadcrumb from 'common/breadCrumb';
import Filters from 'common/filters';
import CompleteBikeDetail from 'common/completeBikeDetail';

const CompleteEvaluation = () => {
  return (
    <>
      <Breadcrumb />
      <Filters title="Completed Evaluation" export={true} />
      <div className="bottom-white-border"></div>
	  <CompleteBikeDetail />
    </>
  );
};

export default CompleteEvaluation;
