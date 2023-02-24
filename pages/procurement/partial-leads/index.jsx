import { Row, Col } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailCard from '../../../components/procurements/detailCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import TabPrimary from '../../../components/common/tabPrimary';
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
      detailNo: '- FB29FH9219HR1',
    },
    {
      ownerName: 'Rishab kumar',
      contact: '+91 9876543219',
      email: 'john#gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
      detailNo: '- FB29FH9219HR1',
    },
    {
      ownerName: 'Rishab Sharma',
      contact: '+91 9876543219',
      email: 'john#gmail.com',
      pinCode: '110014',
      prmSource: 'MIY',
      secSource: 'Google',
      detailNo: '- FB29FH9219HR1',
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

      <TabPrimary
        title1="Recent"
        title2="In-progress (4)"
        title3="Dropped (2)"
        title4="Self consume(By dealer)"
      />
      <Row>
        <ViewAll 
          title="3 Leads Available" 
          viewAllClass="mb-4 mt-0"
        />
        {cardData.map((item) => (
          <Col md={4}>
            <DetailCard
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
      <DetailPagination />
    </div>
  );
}
