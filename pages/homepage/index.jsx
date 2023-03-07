import { MdOutlineFilterList } from 'react-icons/md';
import { TbTrendingUp } from 'react-icons/tb';
import { Tab, Tabs } from 'react-bootstrap';
import { RxCaretRight } from 'react-icons/rx';
import { useState } from 'react';
import DashboardCard from '../../components/dashboardCard';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import DealerPerfomance from '../../components/overview/dealerPerfomance';
import MotorcycleSales from '../../components/overview/motorcycleSales';
import RegionalAnalytics from '../../components/overview/regionalAnalytics';
import InventoryTab from '../../components/overview/tabInventory';
import RetailsTab from '../../components/overview/tabRetails';
import LeadSection from '../../components/overview/leadSection';
import NonReLeadSection from '../../components/overview/nonReLeadSection';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';
import ButtonPrimary from '../../components/common/buttons/ButtonPrimary';
import useMediaQuery from '../../components/common/useMedia';
import BottomActionBar from '../../components/common/bottomActionBar';

import style from './style.module.scss';

export default function Homepage() {
  const isSmallScreen = useMediaQuery(767);
  const [isFilterAction, setFilterAction] = useState(false);
  const filterToggle = () => {
    setFilterAction(!isFilterAction);
  };
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

        {!isSmallScreen && (
          <button
            type="button"
            className={style.filterBtn}
            onClick={filterToggle}
          >
            Filter <MdOutlineFilterList size={15} />
          </button>
        )}

        {isFilterAction && (
          <div className={style.filterPopup}>
            <div className={style.filterAction}>
              <OutlineDropdown
                dropdownTitle="Zone"
                options={[
                  'North Central',
                  'East Culture',
                  'North East Culture',
                ]}
                className="w-full"
              />
              <OutlineDropdown
                dropdownTitle="Region"
                dropdownMenuTitle="Blacklist Dealer"
                className="w-full"
                options={[
                  'East India',
                  'North India',
                  'South India',
                  'West India',
                ]}
              />
              <OutlineDropdown
                dropdownTitle="City"
                dropdownMenuTitle="Blacklist Dealer"
                className="w-full"
                options={['Pune', 'Delhi', 'Pune']}
              />
              <OutlineDropdown
                dropdownTitle="Dealer"
                dropdownMenuTitle="Blacklist Dealer"
                className="w-full"
                options={['Dealer 1', 'Dealer 2', 'Dealer 3']}
              />
              <OutlineDropdown
                dropdownTitle="Time Frame"
                dropdownMenuTitle="Blacklist Dealer"
                className="w-full"
                options={['2pm to 5pm', '10am to 12pm', '9pm to 11pm']}
              />
              <ButtonPrimary
                iconRight={<RxCaretRight />}
                title="Apply"
                white
                className={style.filterButton}
              />
            </div>
            <button
              type="button"
              className={style.closeButton}
              onClick={filterToggle}
            >
              Close x
            </button>
          </div>
        )}
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

      <HeaderPrimary headerClass="mt-5" title="Lead">
        <SearchPrimary placeholder="Search Mobile Number, Chassis Number…" />
        {!isSmallScreen && <FilterButton />}
      </HeaderPrimary>

      <div className={`custom-tab-style ${style.customTab}`}>
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Procurement">
            <div>
              <LeadSection />
              <NonReLeadSection />
            </div>
          </Tab>

          <Tab eventKey="title2" title="Inventory">
            <InventoryTab />
          </Tab>
          <Tab eventKey="title3" title="Retail">
            <RetailsTab />
          </Tab>
        </Tabs>
      </div>

      {isSmallScreen && <BottomActionBar filterHandler={filterToggle} />}
    </div>
  );
}
