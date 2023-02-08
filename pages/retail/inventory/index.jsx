import BikeCardRadio from "common/bikeCardRadio";
import Breadcrumb from "common/breadCrumb";
import DashboardCard from "common/dashboardCard";
import Filters from "common/filters";
import SortTabs from "common/sortTabs";
import TabPrimary from "common/tabPrimary";

export default function Inventory() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="Inventory" />
      <DashboardCard />
      <TabPrimary />
      <SortTabs />
      <BikeCardRadio isCheckBoxVisible={true} isButtonVisible={true} isCardVisible={false}  />
    </div>
  );
}
