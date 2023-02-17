import style from './style.module.scss';
import DashboardCard from '../../components/common/dashboardCard';
import DashboardBigCard from '../../components/overview/dashboardBigCard';
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

      <DashboardCard
        title1="Total Procured"
        description1="1507"
        bottomDescription1="Overall Booking Growth"
        title2="Evaluation Request"
        description2="97"
        bottomDescription2="Received This Week"
        title3="Pending Evaluation"
        description3="12"
        title4="Total Revenue"
        description4="₹ 1,25,000.00"
      />
      <DashboardBigCard />

      <HeaderPrimary headerClass="mt-5" title="Leads">
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <TabPrimary title1="Procurement" title2="Inventory" title3="Retail" />
      <LeadSection />
      <NonReLeadSection />
    </div>
  );
}
