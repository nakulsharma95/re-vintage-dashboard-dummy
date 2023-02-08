import BikeCardRadio from 'common/bikeCardRadio';
import Breadcrumb from 'common/breadCrumb';
import DashboardCard from 'common/dashboardCard';
import Filters from 'common/filters';
import SortTabs from 'common/sortTabs';
import TabPrimary from 'common/tabPrimary';

export default function MarketPlace() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="MarketPlace" />
      <DashboardCard />
      <TabPrimary 
        title1="Active" 
        title2="Inactive (12)"
        title3="OLX Listing (4)"
      />
      <SortTabs />
      <BikeCardRadio isCardVisible={true}  />
    </div>
  );
}
