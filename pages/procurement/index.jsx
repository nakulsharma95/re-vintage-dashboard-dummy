import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BikeCard from '../../components/procurements/bikeCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import DetailCard from '../../components/procurements/detailCard';
import ViewAll from '../../components/common/viewAllHeader';
import Filters from '../../components/common/filters';

function Procurement() {
  const cardData = [
    {
      ownerName: 'Rishab Sharma',
      detailNo: '123456',
    },
    {
      ownerName: 'Rishab kumar',
      detailNo: '123456',
    },
    {
      ownerName: 'Rishab Sharma',
      detailNo: '123456',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Procurement" addmoretitle="Procurement" />
      <Filters title="Procurement Leads" />
      <div className="bottom-white-border" />
      <ViewAll title="Partial Leads" leadsTitle="(8 Leads)" />
      <Row>
        {cardData.map((item) => (
          <Col xl={4} md={6}>
            <DetailCard
              detailNumber={item.detailNo}
            />
          </Col>
        ))}
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
