import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import DealFilter from '../../components/dealClosure/dealFilter';
import EscalationCard from '../../components/escalation/escalationCard';

function Escalation() {
  const escalationCardData = [
    {
      escalationID: '- CSCB29E2B1',
      escalationIssue: 'Customer',
      escalatedBy: 'CRE',
      status: 'Unresolved',
      escalationStage: 'Procurement',
      vdmpId: 'CNNASA0R2R1',
      description: 'Reason for escalation of this lead',
      dateAndTime: '17 Jan, 2023 at 4:23 PM',
    },
    {
      escalationID: '- CSCB29E2B1',
      escalationIssue: 'Customer',
      escalatedBy: 'CRE',
      status: 'Unresolved',
      escalationStage: 'Procurement',
      vdmpId: 'CNNASA0R2R1',
      description: 'Reason for escalation of this lead',
      dateAndTime: '17 Jan, 2023 at 4:23 PM',
    },
    {
      escalationID: '- CSCB29E2B1',
      escalationIssue: 'Customer',
      escalatedBy: 'CRE',
      status: 'Unresolved',
      escalationStage: 'Procurement',
      vdmpId: 'CNNASA0R2R1',
      description: 'Reason for escalation of this lead',
      dateAndTime: '17 Jan, 2023 at 4:23 PM',
    },
    {
      escalationID: '- CSCB29E2B1',
      escalationIssue: 'Customer',
      escalatedBy: 'CRE',
      status: 'Unresolved',
      escalationStage: 'Procurement',
      vdmpId: 'CNNASA0R2R1',
      description: 'Reason for escalation of this lead',
      dateAndTime: '17 Jan, 2023 at 4:23 PM',
    },
  ];

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
      {escalationCardData.map((item) => (
        <EscalationCard
          id={item.escalationID}
          issue={item.escalationIssue}
          escalatedBy={item.escalatedBy}
          status={item.status}
          stage={item.escalationStage}
          vdmpId={item.vdmpId}
          description={item.description}
          dateAndTime={item.dateAndTime}
        />
      ))}
    </div>
  );
}

export default Escalation;
