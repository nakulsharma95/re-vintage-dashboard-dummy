import { Row } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import DetailPagination from '../../../components/common/paginationPrimary';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function UnderNegotiation() {
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <Filters title="Under Negotiation" export />
      <TabPrimary title1="OpDealer (25)en" title2="Seller Portal (12)" />
      <Row>
        <SortTabs />
        <CloserBikeCard
          location
          status
          contactCSE
          isHighestBid="Highest Bid"
          isKmDriven
        />
      </Row>
      <DetailPagination />
    </>
  );
}

export default UnderNegotiation;
