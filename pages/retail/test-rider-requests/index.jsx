import Breadcrumb from "common/breadCrumb";
import CompleteBikeDetail from "common/completeBikeDetail";
import Filters from "common/filters";
import SortTabs from "common/sortTabs";
import TabPrimary from "common/tabPrimary";

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
