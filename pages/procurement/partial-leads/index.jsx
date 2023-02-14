import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailCard from '../../../components/procurements/detailCard';
import { Row } from 'react-bootstrap';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import ViewAll from "../../../components/common/viewAllHeader"

export default function PartialLeads() {
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Partial Leads" />
      <Filters title="Partial Leads" totalLeads="Total Leads: 8" export />
      <TabPrimary
        title1="Recent"
        title2="In-progress (4)"
        title3="Dropped (2)"
        title4="Self consume(By dealer)"
      />
      <Row>
        <ViewAll title="3 Leads Available" />
        <DetailCard detailCardBtmTxt="Evaluation form sent: 8th November 2022 | 4:40 PM"/>
      </Row>
      <DetailPagination />
    </div>
  );
}
