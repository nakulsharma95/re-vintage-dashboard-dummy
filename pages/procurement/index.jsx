import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import BikeCard from '../../components/procurements/bikeCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import DetailCard from '../../components/procurements/detailCard';
import ViewAll from '../../components/common/viewAllHeader';
import SearchPrimary from '../../components/common/searchPrimary';
import FilterButton from '../../components/common/filterButton';
import HeaderPrimary from '../../components/common/headerPrimary';
import ContactViaModal from '../../components/modals/contactViaModal';

function Procurement() {
  const [contactViaModal, setContactViaModal] = useState(false);

  const contactViaToggleModal = () => {
    setContactViaModal(!contactViaModal);
  };

  const cardData = [
    {
      ownerName: 'Rishab Sharma',
      contact: '+91 9876543219',
      email: 'john@gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
    },
    {
      ownerName: 'Rishab kumar',
      contact: '+91 9876543219',
      email: 'john@gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
    },
    {
      ownerName: 'Rishab Sharma',
      contact: '+91 9876543219',
      email: 'john@gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
    },
  ];
  const evaluationData = [
    {
      imageUrl: '/images/bikeImage.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
  ];

  const schedulednData = [
    {
      imageUrl: '/images/bikeImage.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      smPriceTitle: 'Estimated Price',
      price: '1,15,000',
      priceTwo: '1,25,000',
    },
  ];

  const completedData = [
    {
      imageUrl: '/images/bikeImage.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      priceTitle: 'Evaluation Price',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      priceTitle: 'Evaluation Price',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      priceTitle: 'Evaluation Price',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bikeModal: '2015 Classic 350',
      bikeRc: '- DL6TAL7314',
      bikekm: '43,384',
      bikeOwner: '1st',
      bikeCc: '350',
      priceTitle: 'Evaluation Price',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Procurement" />
      <HeaderPrimary headerClass="mb-2" title="Procurement Leads">
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="bottom-white-border" />
      <ViewAll
        title="Partial Leads"
        leadsTitle="(8 Leads)"
        viewAllBtn
        viewAllClass="mt-4 mb-4"
      />
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
              detailHandler={contactViaToggleModal}
            />
          </Col>
        ))}
      </Row>
      <ViewAll
        title="Evaluation Requests"
        leadsTitle="(8 Leads)"
        viewAllBtn
        viewAllClass="mt-5 mb-3"
      />
      <Row>
        {evaluationData.map((item) => (
          <Col md={3}>
            <BikeCard
              className="bg-gray-3 py-2"
              isKmData
              isestimatedPrice
              isEstBtn
              imageUrl={item.imageUrl}
              bikeModal={item.bikeModal}
              bikeRc={item.bikeRc}
              bikekm={item.bikekm}
              bikeOwner={item.bikeOwner}
              bikeCc={item.bikeCc}
              smPriceTitle={item.smPriceTitle}
              price={item.price}
              priceTwo={item.priceTwo}
            />
          </Col>
        ))}
      </Row>

      <ViewAll
        title="Scheduled Evaluation"
        leadsTitle="(32 Leads)"
        viewAllBtn
        viewAllClass="mt-5 mb-3"
      />
      <Row>
        {schedulednData.map((item) => (
          <Col md={3}>
            <BikeCard
              className="bg-gray-3 py-2"
              isKmData
              isViewBtn
              isestimatedPrice
              imageUrl={item.imageUrl}
              bikeModal={item.bikeModal}
              bikeRc={item.bikeRc}
              bikekm={item.bikekm}
              bikeOwner={item.bikeOwner}
              bikeCc={item.bikeCc}
              smPriceTitle={item.smPriceTitle}
              price={item.price}
              priceTwo={item.priceTwo}
            />
          </Col>
        ))}
      </Row>

      <ViewAll
        title="Completed Evaluation"
        leadsTitle="(32 Leads)"
        viewAllBtn
        viewAllClass="mt-5 mb-3"
      />
      <Row>
        {completedData.map((item) => (
          <Col md={3}>
            <BikeCard
              className="bg-gray-3 py-2 bg-transparent mb-0 pb-0"
              isKmData
              isPriceData
              imageUrl={item.imageUrl}
              bikeModal={item.bikeModal}
              bikeRc={item.bikeRc}
              bikekm={item.bikekm}
              bikeOwner={item.bikeOwner}
              bikeCc={item.bikeCc}
              priceTitle={item.priceTitle}
            />
          </Col>
        ))}
      </Row>

      <ContactViaModal
        isOpen={contactViaModal}
        handleClose={contactViaToggleModal}
      />
    </div>
  );
}
export default Procurement;
