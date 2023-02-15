import React from 'react';
import { Row } from 'react-bootstrap';
import BikeCard from '../../components/procurements/bikeCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import DetailCard from '../../components/procurements/detailCard';
import ViewAll from '../../components/common/viewAllHeader';
import Filters from '../../components/common/filters';

function Procurement() {
  return (
    <div>
      <Breadcrumb title="Procurement" addmoretitle="Procurement" />
      <Filters title="Procurement Leads" />
      <div className="bottom-white-border" />
      <Row>
        <ViewAll title="Partial Leads" leadsTitle="(8 Leads)" />
        <DetailCard />
      </Row>
      <Row>
        <ViewAll title="Evaluation Requests" leadsTitle="(8 Leads)" />
        <BikeCard contactBtn isEvalTag />
        <ViewAll title="Scheduled Evaluation" leadsTitle="(32 Leads)" />
        <BikeCard viewDetail />
        <ViewAll title="Completed Evaluation" leadsTitle="(32 Leads)" />
        <BikeCard completeEval />
      </Row>
    </div>
  );
}
export default Procurement;
