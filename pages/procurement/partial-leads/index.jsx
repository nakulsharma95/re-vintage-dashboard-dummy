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
      details: '- FB29FH9219HR1',
    },
    {
      details: '- FB29FH9219HR1',
    },
    {
      details: '- FB29FH9219HR1',
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
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <TabPrimary
        title1="Recent"
        title2="In-progress (4)"
        title3="Dropped (2)"
        title4="Self consume(By dealer)"
      />
      <Row>
        <ViewAll title="3 Leads Available" />
        {cardData.map((item) => (
          <Col md={4}>
            <DetailCard data={item} detailCardBtmTxt="" />
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
