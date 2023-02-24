import { MdOutlineFilterList } from 'react-icons/md';
import { TbTrendingUp } from 'react-icons/tb';
import { Tab, Tabs } from 'react-bootstrap';
import DashboardCard from '../../components/dashboardCard';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import DealerPerfomance from '../../components/overview/dealerPerfomance';
import MotorcycleSales from '../../components/overview/motorcycleSales';
import RegionalAnalytics from '../../components/overview/regionalAnalytics';
import style from './style.module.scss';
import ProcurementTab from '../../components/overview/tabProcurement';
import InventoryTab from '../../components/overview/tabInventory';
import RetailsTab from '../../components/overview/tabRetails';

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
      title: 'Evaluation Request',
      description: '97',
      bottomDescription: 'Overall Booking Growth',
      percentage: '22',
      cardBg: '#403E3E',
      dividerColor: '#282828',
    },
    {
      title: 'Pending Evaluation',
      description: '12',
      cardBg: '#282828',
    },
    {
      title: 'Total Revenue',
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
        <SearchPrimary placeholder="Search Reference ID" />
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
        <SearchPrimary placeholder="Search Mobile Number, Chassis Number…" />
        <FilterButton />
      </HeaderPrimary>

      {/* <TabPrimary title1="Procurement" title2="Inventory" title3="Retail" /> */}
      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="title1" title="Procurement">
            <ProcurementTab />
          </Tab>

          <Tab eventKey="title2" title="Inventory">
            <InventoryTab />
          </Tab>
          <Tab eventKey="title3" title="Retail">
            <RetailsTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
