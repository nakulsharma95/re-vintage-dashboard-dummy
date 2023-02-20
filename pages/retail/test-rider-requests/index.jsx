import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

export default function TestRiderRequests() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Test Ride Requests" />
      <HeaderPrimary headerClass="mb-2" title="Test Rider Requests">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>
      <TabPrimary
        title1="From Web (4)"
        title2="From OLX"
        title3="Completed (4)"
        title4="Dropped (4)"
      />
      <DealFilter title="12 Result Found" isViewBy droptitle="Pending" />
      <CompleteBikeDetail
        isEvalBtnVisible={false}
        isCallerBtnVisible
        isEnquiryNumVisible
      />
    </div>
  );
}
