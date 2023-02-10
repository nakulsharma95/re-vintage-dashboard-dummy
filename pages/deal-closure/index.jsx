import React from 'react';
import Breadcrumb from '~/components/common/breadcrumbPrimary';
import DealBikeCard from '~/components/dealClosure';
import Filters from '~/components/common/filters';

function DealClosure() {
  return (
    <>
      <Breadcrumb title="Deal Closure" />
      <Filters
        title="Deal Closure"
        subTitle="Please fill all the necessary details"
      />
      <div className="bottom-white-border" />
      <DealBikeCard />
    </>
  );
}

export default DealClosure;
