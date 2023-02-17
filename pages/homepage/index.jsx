import style from './style.module.scss';
import DashboardCard from '../../components/common/dashboardCard';
import DashboardBigCard from '../../components/common/dashboardBigCard';
import TabPrimary from '../../components/common/tabPrimary';
import LeadSection from '../../components/overview/leadSection';
import NonReLeadSection from '../../components/overview/nonReLeadSection';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';

export default function Homepage() {
  return (
    <div className={style.homepageStyle}>
      <HeaderPrimary
        headerClass="mb-5"
        title="Welcome to Your Inventory Dashboard"
        subTitle="Here you will see the most latest update"
      >
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <div>
        <DashboardCard />
        <DashboardBigCard />
        <HeaderPrimary headerClass="mt-5" title="Leads">
          <SearchPrimary />
          <FilterButton />
        </HeaderPrimary>

        {/* <Filters filterInput filterButton title="Leads" /> */}
        <TabPrimary title1="Procurement" title2="Inventory" title3="Retail" />
        <LeadSection />
        <NonReLeadSection />
      </div>
    </div>
  );
}
