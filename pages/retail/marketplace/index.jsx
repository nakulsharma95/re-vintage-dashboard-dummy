import BikeCardRadio from '../../../components/common/cardCheckbox';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DashboardCard from '../../../components/common/dashboardCard';
import Filters from '../../../components/common/filters';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';

export default function MarketPlace() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Inventory" />
      <Filters title="MarketPlace" />
      <DashboardCard />
      <TabPrimary
        title1="Active"
        title2="Inactive (12)"
        title3="OLX Listing (4)"
      />
      <SortTabs selectAllCheck approveBtn moveToOlx />
      <BikeCardRadio
        isCardVisible
        isCheckBoxVisible
        isBikeTagVisible={false}
        isOlxTagVisible
        isBikeChassisVisible={false}
      />
    </div>
  );
}
