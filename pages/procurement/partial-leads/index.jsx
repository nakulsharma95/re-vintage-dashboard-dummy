import { Row, Col } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailCard from '../../../components/procurements/detailCard';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import ViewAll from '../../../components/common/viewAllHeader';
import styles from "./style.module.scss"

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
      <Filters
        title="Partial Leads"
        totalLeads="Total Leads: 8"
        filterInput
        filterButton
        export
      />
      <TabPrimary
        title1="Recent"
        title2="In-progress (4)"
        title3="Dropped (2)"
        title4="Self consume(By dealer)"
      />
      <Row>
        <ViewAll title="3 Leads Available" />
        {cardData.map((item, index) => {
          return (
            <Col md={4} key={index}>
              <DetailCard data={item} detailCardBtmTxt="" />
            </Col>
          );
        })}
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
