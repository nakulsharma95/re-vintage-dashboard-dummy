import ClosedBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

export default function ClosedBids() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Closed Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters 
        filterInput
        filterButton
        title="Closed Bids"
        export 
      />
      <TabPrimary title1="Bids" title2="No Bids" />
      <div className="mb-3">25 Bids Available</div>
      <ClosedBikeCard closedBid arrowBtn />
      <DetailPagination className="mt-3" />
    </div>
  );
}
