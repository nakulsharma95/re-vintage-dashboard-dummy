import { RiShareBoxFill } from 'react-icons/ri';
import SortByDropdown from '../../components/common/sortByDropdown';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import OutlineButton from '../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import SearchPrimary from '../../components/common/searchPrimary';
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
        <OutlineButton title="Export Data" leftIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
      </HeaderPrimary>
      <hr />

      <div className="action-list-style my-3">
        <div className="left-sec">
          <h5 className="title3">4 Escalations Found</h5>
        </div>

        <div className="right-sec">
          <SortByDropdown
            droptitle="Select view"
            options={['Recent', 'tommrow', '2 days ago']}
          />
        </div>
      </div>

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
