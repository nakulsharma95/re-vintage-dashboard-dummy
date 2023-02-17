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
      contact:'+91 9876543219',
      email:'john#gmail.com',
      pinCode:'110014',
      prmSource:'MIY',
      secSource:'Google',
    },
    {
      ownerName: 'Rishab kumar',
      contact:'+91 9876543219',
      email:'john#gmail.com',
      pinCode:'110014',
      prmSource:'MIY',
      secSource:'Google',
    },
    {
      ownerName: 'Rishab Sharma',
      contact:'+91 9876543219',
      email:'john#gmail.com',
      pinCode:'110014',
      prmSource:'MIY',
      secSource:'Google',
    },
  ];
  const cardData2 = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      evalTag: 'Evaluation Overdue',
    },
    {
      imageUrl: '/images/bikeImage3.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Procurement" addmoretitle="Procurement" />
      <Filters title="Procurement Leads" filterInput filterButton />
      <div className="bottom-white-border" />
      <ViewAll title="Partial Leads" leadsTitle="(8 Leads)" />
      <Row>
        {cardData.map((item) => (
          <Col xl={4} md={6}>
            <DetailCard
              ownerName={item.ownerName}
              emailId={item.email}
              pinCode={item.pinCode}
              prmSource={item.prmSource}
              secSource={item.secSource}
              contactNo={item.contact}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <ViewAll title="Evaluation Requests" leadsTitle="(8 Leads)" />
        {cardData2.map((item) => (
          <Col md={3}>
            <BikeCard data={item} contactBtn isEvalTag />
          </Col>
        ))}
        <ViewAll title="Scheduled Evaluation" leadsTitle="(32 Leads)" />
        {cardData2.map((item) => (
          <Col md={3}>
            <BikeCard data={item} viewDetail />
          </Col>
        ))}
        <ViewAll title="Completed Evaluation" leadsTitle="(32 Leads)" />
        {cardData2.map((item) => (
          <Col md={3}>
            <BikeCard data={item} completeEval />
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Procurement;
