import BikeCardRadio from 'common/bikeCardRadio';
import Breadcrumb from 'common/breadCrumb';
import DashboardCard from 'common/dashboardCard';
import Filters from 'common/filters';
import SortTabs from 'common/sortTabs';
import TabPrimary from 'common/tabPrimary';

export default function Retail() {
  return (
    <div>
      <Breadcrumb />
      <Filters title="Inventory" />
      <DashboardCard />
      <TabPrimary />
      <SortTabs />
      <BikeCardRadio isCheckBoxVisible={false} isButtonVisible={false} />
    </div>
  );
}
