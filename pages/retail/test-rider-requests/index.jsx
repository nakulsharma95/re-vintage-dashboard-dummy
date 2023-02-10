import Breadcrumb from "~/components/common/breadcrumbPrimary";
import CompleteBikeDetail from "~/components/procurements/completeEvalutationCard";
import Filters from "~/components/common/filters";
import SortTabs from "~/components/common/sortTabs";
import TabPrimary from "~/components/common/tabPrimary";

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
      <SortTabs />
      <CompleteBikeDetail />
    </div>
  );
}
