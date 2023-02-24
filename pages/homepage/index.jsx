import { MdOutlineFilterList } from 'react-icons/md';
import { TbTrendingUp } from 'react-icons/tb';
import DashboardCard from '../../components/dashboardCard';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import TabPrimary from '../../components/common/tabPrimary';
import DealerPerfomance from '../../components/overview/dealerPerfomance';
import LeadSection from '../../components/overview/leadSection';
import MotorcycleSales from '../../components/overview/motorcycleSales';
import NonReLeadSection from '../../components/overview/nonReLeadSection';
import RegionalAnalytics from '../../components/overview/regionalAnalytics';
import style from './style.module.scss';

export default function Homepage() {
  const dashboardCardData = [
    {
      title: 'Total Procured',
      description: '1507',
      bottomDescription: 'Overall Booking Growth',
      percentage: '12%',
      icon: <TbTrendingUp color="#13B21F" size={15} />,
      cardBg: '#282828',
      dividerColor: '#403E3E',
    },
    {
      title: 'Total Procured',
      description: '97',
      bottomDescription: 'Overall Booking Growth',
      percentage: '22',
      cardBg: '#403E3E',
      dividerColor: '#282828',
    },
    {
      title: 'Total Procured',
      description: '12',
      cardBg: '#282828',
    },
    {
      title: 'Total Procured',
      description: '',
      bottomDescription: 'Overall Booking Growth',
      percentage: '12%',
      cardBg: '#DA291C',
      priceValue: '₹ 1,25,000.00',
    },
  ];
  return (
    <div className={style.homepageStyle}>
      <HeaderPrimary
        headerClass="mb-5"
        title="Welcome to Your Inventory Dashboard"
        subTitle="Here you will see the most latest update"
      >
        <SearchPrimary />
        <button type="button" className={style.filterBtn}>
          Filter <MdOutlineFilterList size={15} />
        </button>
      </HeaderPrimary>

      <div className="dashboard-card">
        {dashboardCardData.map((item) => (
          <DashboardCard
            title={item.title}
            description={item.description}
            bottomDescription={item.bottomDescription}
            divider
            icon={item.icon}
            percentage={item.percentage}
            cardBg={item.cardBg}
            dividerColor={item.dividerColor}
            priceValue={item.priceValue}
          />
        ))}
      </div>

      <div className={style.cardGridLayoutStyle}>
        <MotorcycleSales />
        <DealerPerfomance />
        <RegionalAnalytics />
      </div>

      <HeaderPrimary headerClass="mb-1" title="Lead">
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <TabPrimary title1="Procurement" title2="Inventory" title3="Retail" />
      <LeadSection />
      <NonReLeadSection />
    </div>
  );
}
