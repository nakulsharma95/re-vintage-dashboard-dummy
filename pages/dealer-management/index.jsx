import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { RiShareBoxFill } from 'react-icons/ri';
import { Tab, Tabs } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import DealerTable from '../../components/dealer-management/dealerTable';
import FilterButton from '../../components/common/filterButton';
import EmptyState from '../../components/emptyState';
import MobileDealerCard from '../../components/dealer-management/mobileDealerCard';

function DealerManagement() {
  const mobileDealerCard = [
    {
      title: 'Neel Motors',
      location:
        'WZ - 1, Nirankari Tower, 2nd floor, Ganesh Nagar, Opposite metro pillar no. 535, New Delhi - 110018',
      mobile: '+91 98765 43210',
      email: 'delhimotorcycles@royalenfield.com',
    },
    {
      title: 'Neel Motors',
      location:
        'WZ - 1, Nirankari Tower, 2nd floor, Ganesh Nagar, Opposite metro pillar no. 535, New Delhi - 110018',
      mobile: '+91 98765 43210',
      email: 'delhimotorcycles@royalenfield.com',
    },
    {
      title: 'Neel Motors',
      location:
        'WZ - 1, Nirankari Tower, 2nd floor, Ganesh Nagar, Opposite metro pillar no. 535, New Delhi - 110018',
      mobile: '+91 98765 43210',
      email: 'delhimotorcycles@royalenfield.com',
    },
    {
      title: 'Neel Motors',
      location:
        'WZ - 1, Nirankari Tower, 2nd floor, Ganesh Nagar, Opposite metro pillar no. 535, New Delhi - 110018',
      mobile: '+91 98765 43210',
      email: 'delhimotorcycles@royalenfield.com',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Dealer Management" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Dealer Management"
        subTitle="Dealer Management module"
      >
        <OutlineButton title="Export Data" leftIcon={<RiShareBoxFill />} />
        <OutlineButton title="Import EXCEL" leftIcon={<BiDownload />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      {mobileDealerCard.map((item) => (
        <div className={styles.mobileDealerCard}>
          <MobileDealerCard
            title={item.title}
            location={item.location}
            mobile={item.mobile}
            email={item.email}
          />
        </div>
      ))}

      <div className="d-none d-lg-block">
        <div className="custom-tab-style">
          <Tabs
            className="mb-3"
            defaultActiveKey="title1"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="title1" title="All">
              <DealerTable />
            </Tab>
            <Tab eventKey="title2" title="Enabled Dealers">
              <EmptyState
                title="No Result Found!"
                description="we couldn find what you searched for try something again."
              />
            </Tab>
            <Tab eventKey="title3" title="Disabled Dealers">
              <EmptyState
                title="No Result Found!"
                description="we couldn find what you searched for try something again."
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default DealerManagement;
