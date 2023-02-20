import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import TabPrimary from '../../components/common/tabPrimary';
import DealerTable from '../../components/dealer-management/dealerTable';
import FilterButton from '../../components/common/filterButton';

function DealerManagement() {
  return (
    <div>
      <Breadcrumb title="Dealer Management" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Dealer Management"
        subTitle="Dealer Management module"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <OutlineButton title="Import EXCEL" rightIcon={<AiOutlineDownload />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>
      <TabPrimary
        title1="All"
        title2="Enabled Dealers"
        title3="Disabled Dealers"
      />
      <DealerTable />
    </div>
  );
}

export default DealerManagement;
