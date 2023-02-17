import style from './style.module.scss';
import Filters from '../../components/common/filters';
import DashboardCard from '../../components/common/dashboardCard';
import DashboardBigCard from '../../components/overview/dashboardBigCard';
import TabPrimary from '../../components/common/tabPrimary';
import LeadSection from '../../components/overview/leadSection';
import NonReLeadSection from '../../components/overview/nonReLeadSection';

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
      <Filters filterInput filterButton title="Leads" />
      <TabPrimary title1="Procurement" title2="Inventory" title3="Retail" />
      <LeadSection />
      <NonReLeadSection />
    </div>
  );
}
