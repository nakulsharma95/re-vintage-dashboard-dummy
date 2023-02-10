import BikeCardRadio from "~/components/common/cardCheckbox";
import Breadcrumb from "~/components/common/breadcrumbPrimary";
import DashboardCard from "~/components/common/dashboardCard";
import Filters from "~/components/common/filters";
import SortTabs from "~/components/common/sortTabs";
import TabPrimary from "~/components/common/tabPrimary";

export default function Inventory() {
  return (
    <div>
       <Breadcrumb title="Retail" addmoretitle="Inventory" />
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
