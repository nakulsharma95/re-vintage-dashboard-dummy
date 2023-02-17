import { Row } from 'react-bootstrap';
import BikeCard from '../../../components/procurements/bikeCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';

export default function Booking() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Sold" />
      <Filters filterInput filterButton export title="Booking" />
      <TabPrimary title1="Booked (4)" title2="Sold" title3="Returned (12)" />
      <DealFilter title="4 Leads" />
      <Row>
        <BikeCard />
      </Row>
    </div>
  );
}
