import Breadcrumb from "common/breadCrumb";
import CompleteBikeDetail from "common/completeBikeDetail";
import Filters from "common/filters";
import SortTabs from "common/sortTabs";
import TabPrimary from "common/tabPrimary";

export default function TestRiderRequests() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="TestRiderRequests" />
      <TabPrimary />
      <SortTabs />
      <CompleteBikeDetail />
    </div>
  );
}
