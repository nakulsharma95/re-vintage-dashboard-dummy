import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

export default function ActiveBids() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Active Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters title="Active Bids" export refresh />
      <TabPrimary title1="Today" title2="Next Bidding (31 Dec)" />
      <div className="mb-3">25 Bids Available</div>
      <ActiveBikeCard highestBid arrowBtn />
      <DetailPagination className="mt-3" />
    </div>
  );
}
