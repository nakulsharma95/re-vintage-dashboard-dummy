import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import DealFilter from '../../components/dealClosure/dealFilter';
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
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
      </HeaderPrimary>
      <hr />
      <DealFilter title="4 Escalations Found" isViewBy droptitle="Recent" />
      <EscalationCard />
      <EscalationCard />
      <EscalationCard />
      <EscalationCard />
    </div>
  );
}

export default Escalation;
