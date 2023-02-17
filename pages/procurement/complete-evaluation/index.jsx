import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

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
      <HeaderPrimary headerClass="mb-2" title="Completed Evaluation">
        <OutlineButton
          title="Scheduled Evaluation"
          rightIcon={<RiShareBoxFill />}
          className="mr-2"
        />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <div className="bottom-white-border" />
      <div className="mt-3">
        <DealFilter title="2 Search" />
      </div>
      {completeData.map((item) => (
        <CompleteBikeDetail
          data={item}
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
