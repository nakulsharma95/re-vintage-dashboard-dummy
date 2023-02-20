import { Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import BikeCard from '../../../components/procurements/bikeCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import TabPrimary from '../../../components/common/tabPrimary';
import DealFilter from '../../../components/dealClosure/dealFilter';
import SearchPrimary from '../../../components/common/searchPrimary';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';

export default function Booking() {
  return (
    <div>
      <Breadcrumb title="Retail" addmoretitle="Sold" />
      <HeaderPrimary headerClass="mb-2" title="Booking">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary />
        <FilterButton />
      </HeaderPrimary>

      <TabPrimary title1="Booked (4)" title2="Sold" title3="Returned (12)" />
      <DealFilter title="4 Leads" />
      <Row>
        <BikeCard />
      </Row>
    </div>
  );
}
