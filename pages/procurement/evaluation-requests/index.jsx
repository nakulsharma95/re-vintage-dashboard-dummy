import React from 'react';
import Breadcrumb from "common/breadCrumb";
import Filters from "common/filters";
import MotorcycleDetailCard from 'common/motorcycleDetailsCard';
import TabPrimary from 'common/tabPrimary';
import DetailPagination from 'common/detailPagination';
import CancelModal from 'common/cancelModal';
import RescheduleReason from 'common/rescheduleReasonModal';

const EvaluationRequest = () => {
  return (
    <>
      <Breadcrumb />
      <Filters title="Evaluation Requests" export={true}/>
      <TabPrimary />
      <MotorcycleDetailCard />
      <DetailPagination />
      <CancelModal />
      <RescheduleReason />
    </>
  );
};

export default EvaluationRequest;
