import Breadcrumb from "common/breadCrumb";
import Filters from "common/filters";
import SortTabs from "common/sortTabs";
import TabPrimary from "common/tabPrimary";

export default function Booking() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="Booking" />
      <TabPrimary 
        title1="Booked (4)" 
        title2="Sold"
        title3="Returned (12)"
      />
      <SortTabs />
    </div>
  );
}
