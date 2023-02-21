import React from 'react';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import { RiShareBoxFill } from 'react-icons/ri';
import TabPrimary from '../../components/common/tabPrimary';
import EscalationCard from '../../components/escalation/escalationCard';

function Escalation() {
  return (
    <div>
      <Breadcrumb title="Escalations" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Escalations"
        subTitle="Please fill all the necessary details"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
      </HeaderPrimary>
	  <TabPrimary  />

    <EscalationCard/>
    <EscalationCard/>
    <EscalationCard/>
    <EscalationCard/>
    </div>
  );
}

export default Escalation;
