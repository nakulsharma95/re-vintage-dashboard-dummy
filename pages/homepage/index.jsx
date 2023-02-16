import style from './style.module.scss';
import Filters from '../../components/common/filters';
import DashboardCard from '../../components/common/dashboardCard';
import DashboardBigCard from '../../components/common/dashboardBigCard';
import TabPrimary from '../../components/common/tabPrimary';
import Leads from "../../components/common/Leads";
import NonReLead from '../../components/common/NonReLead';

export default function Homepage() {
  return (
    <div className={style.homepageStyle}>
      <div className="mb-4">
        <Filters
          filterInput
          filterButton
          title="Welcome to Your Inventory Dashboard"
          subTitle="Here you will see the most latest update"
        />
      </div>

      <DashboardCard />
      <DashboardBigCard />
      <Filters filterInput filterButton title="Leads"  />
      <TabPrimary title1="Procurement" title2="Inventory" title3="Retail"/>
      <Leads />
      <NonReLead/>
    </div>
  );
}
