import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailCard from '../../../components/procurements/detailCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import ViewAll from '../../../components/common/viewAllHeader';
import styles from './style.module.scss';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

export default function PartialLeads() {
  const cardData = [
    {
      ownerName: 'Rishab Sharma',
      contact: '+91 9876543219',
      email: 'john#gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
      detailNo: 'FB29FH9219HR1',
      reason: 'Customer not interested',
      dateTime: '30 Sep, 2022 | 4:40 pm',
    },
    {
      ownerName: 'Rishab kumar',
      contact: '+91 9876543219',
      email: 'john#gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
      detailNo: 'FB29FH9219HR1',
      reason: 'Customer not interested',
      dateTime: '30 Sep, 2022 | 4:40 pm',
    },
    {
      ownerName: 'Rishab Sharma',
      contact: '+91 9876543219',
      email: 'john#gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
      detailNo: 'FB29FH9219HR1',
      reason: 'Customer not interested',
      dateTime: '30 Sep, 2022 | 4:40 pm',
    },
  ];
  return (
    <div className="">
      <Breadcrumb title="Procurement" addmoretitle="Partial Leads" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Partial Leads"
        totalLeads="Total Leads: 8"
      >
        <OutlineButton
          title="Export data"
          rightIcon={<RiShareBoxFill />}
          className="mr-2"
        />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="custom-tab-style">
        <Tabs
          className="mb-3"
          defaultActiveKey="title1"
          id="uncontrolled-tab-example"
          tabClassName="custom-tab-nav"
        >
          <Tab eventKey="title1" title="Recent">
            <Row>
              <ViewAll title="3 Leads Available" viewAllClass="mb-4 mt-0" />
              {cardData.map((item) => (
                <Col md={4}>
                  <DetailCard
                    isCardFooter
                    isContactBtn
                    isDropbtn
                    detailNumber={item.detailNo}
                    ownerName={item.ownerName}
                    emailId={item.email}
                    pinCode={item.pinCode}
                    prmSource={item.prmSource}
                    secSource={item.secSource}
                    contactNo={item.contact}
                  />
                </Col>
              ))}
              <Col md={12}>
                <p className={styles.detailCardTxt}>
                  Evaluation form sent: 8th November 2022 | 4:40 PM
                </p>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="title2" title="In-progress (4)">
            <Row className="mb-5">
              <ViewAll title="3 Leads Available" viewAllClass="mb-4 mt-0" />
              {cardData.map((item) => (
                <Col md={4}>
                  <DetailCard
                    isCardFooter
                    isDropbtn
                    isUserDetail
                    isContactBtn
                    detailNumber={item.detailNo}
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
          </Tab>
          <Tab eventKey="title3" title="Dropped (2)">
            <Row className="mb-5">
              <ViewAll title="3 Leads Available" viewAllClass="mb-4 mt-0" />
              {cardData.map((item) => (
                <Col md={4}>
                  <DetailCard
                    isCardFooter
                    isDateTime
                    dateTime={item.dateTime}
                    isUserDetail
                    isReason
                    reason={item.reason}
                    detailNumber={item.detailNo}
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
          </Tab>
          <Tab eventKey="title4" title="Self consume(By dealer)">
            <Row className="mb-5">
              <ViewAll title="3 Leads Available" viewAllClass="mb-4 mt-0" />
              {cardData.map((item) => (
                <Col md={4}>
                  <DetailCard
                    isDropLead
                    detailNumber={item.detailNo}
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
          </Tab>
        </Tabs>
      </div>
      <DetailPagination />
    </div>
  );
}
