import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilter } from 'react-icons/bs';
import { MdOutlineFilterList } from 'react-icons/md';
import { RxCaretRight } from 'react-icons/rx';
import PieBig from '../../components/overview/pieBig';
import BottomActionBar from '../../components/common/bottomActionBar';
import ButtonPrimary from '../../components/common/buttons/ButtonPrimary';
import OutlineDropdown from '../../components/common/buttons/OutlineDropdown';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import useMediaQuery from '../../components/common/useMedia';
import DashboardCard from '../../components/dashboardCard';
import PieSmall from '../../components/overview/pieSmall';
import ProcurementTable from '../../components/overview/procurementTable';
import EvaluteForm from '../../components/priceCalculator/evaluateForm';

import style from './style.module.scss';

export default function DealerOverview() {
  const isSmallScreen = useMediaQuery(767);
  const [isFilterAction, setFilterAction] = useState(false);
  const filterToggle = () => {
    setFilterAction(!isFilterAction);
  };
  const dashboardCardData = [
    {
      title: 'Under Refurbishment',
      description: '32',
      cardBg: 'white',
      theme: 'light',
    },
    {
      title: 'Pending Evaluation',
      description: '12',
      cardBg: '#F4F4F4',
      theme: 'light',
    },
    {
      title: 'Pending Content Upload',
      description: '8',
      cardBg: '#5C5C5C',
    },
    {
      title: 'Pending Admin Approval',
      description: '12',
      cardBg: '#403E3E',
    },
  ];
  return (
    <div className={style.dealerOverviewStyle}>
      <HeaderPrimary
        headerClass="mb-5"
        title="Welcome to Your Inventory Dashboard"
        subTitle="Here you will see the most latest update"
      >
        {!isSmallScreen && (
          <>
            <SearchPrimary placeholder="Search Reference ID" />
            <button
              type="button"
              className={style.filterBtn}
              onClick={filterToggle}
            >
              Filter <MdOutlineFilterList size={15} />
            </button>
          </>
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

      <div className="evalute-card">
        <div className="mb-2">Evaluate In Easy Steps</div>
        <EvaluteForm />
      </div>

      <div className="dashboard-card">
        {dashboardCardData.map((item) => (
          <DashboardCard
            title={item.title}
            description={item.description}
            bottomDescription={item.bottomDescription}
            icon={item.icon}
            cardBg={item.cardBg}
            theme={item.theme}
            isFooterHide
          />
        ))}
      </div>

      <div className={style.colStyle}>
        <PieSmall containerStyle={style.graphStyle1} title="Source" />
        <div className={`dashboardTable ${style.tableCustom}`}>
          <ProcurementTable />
        </div>
      </div>

      <div className={style.colStyle}>
        <PieSmall containerStyle={style.graphStyle1} title="Source" />
        <PieBig containerStyle={style.graphStyle2} title="Bidding Overview" />
      </div>

      <div className={style.colStyle}>
        <div className={`dashboardTable ${style.tableCustom}`}>
          <ProcurementTable />
        </div>
        <PieSmall containerStyle={style.graphStyle1} title="Source" />
      </div>

      {isSmallScreen && (
        <BottomActionBar>
          <button type="button">
            Search <AiOutlineSearch />
          </button>
          <button type="button" onClick={filterToggle}>
            Filter <BsFilter />
          </button>
        </BottomActionBar>
      )}
    </div>
  );
}
