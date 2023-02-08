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
      <TabPrimary />
      <SortTabs />
      <BikeCardRadio isCardVisible={true}  />
    </div>
  );
}
