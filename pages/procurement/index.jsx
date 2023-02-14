import React from 'react';
import BikeCard from '../../components/procurements/bikeCard';
import { Row } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import DetailCard from '../../components/procurements/detailCard';
import ViewAll from "../../components/common/viewAllHeader"
import Filters from '../../components/common/filters';

const Procurement =() => {
  return (
    <div>
      <Breadcrumb title="Procurement" addmoretitle="Procurement" />
      <Filters title="Procurement Leads" />
      <div className="bottom-white-border" />
      <DetailCard />
      <Row>
        <ViewAll title="Evaluation Requests" leads="(8 Leads)" />
        <BikeCard contactBtn isEvalTag/>
        <ViewAll title="Scheduled Evaluation" leads="(32 Leads)" />
        <BikeCard viewDetail/>
        <ViewAll title="Completed Evaluation" leads="(32 Leads)" />
        <BikeCard completeEval/>
      </Row>
    </div>
  );
}
export default Procurement;