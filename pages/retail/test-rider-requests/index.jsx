import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';

export default function TestRiderRequests() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Test Ride Requests" />
      <Filters title="TestRiderRequests" />
      <TabPrimary
        title1="From Web (4)"
        title2="From OLX"
        title3="Completed (4)"
        title4="Dropped (4)"
      />
       <DealFilter title="12 Result Found" isViewBy droptitle="Pending" />
      <CompleteBikeDetail isEvalBtnVisible={false} isCallerBtnVisible={true} isEnquiryNumVisible={true}  />
    </div>
  );
}
