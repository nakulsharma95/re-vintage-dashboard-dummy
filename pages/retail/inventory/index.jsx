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
      <TabPrimary 
        title1="Content Approval Pending (12)" 
        title2="Content Upload Pending (8)"
        title3="Under Refurbishment"
        title4="Pending Evaluation (15)"
      />
      <SortTabs />
      <BikeCardRadio isCheckBoxVisible={true} isButtonVisible={true} isCardVisible={false}  />
    </div>
  );
}
