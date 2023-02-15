import UpcomingBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import TabPrimary from '../../../components/common/tabPrimary';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

export default function UpcomingBids() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Upcoming Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters filterInput filterButton title="Upcoming Bids" export bidPrice />
      <TabPrimary title1="Today" title2="Next Bidding (31 Dec)" />
      <div className="mb-3">25 Bids Available</div>
      <UpcomingBikeCard baseprice arrowBtn />
      <DetailPagination className="mt-3" />
    </div>
  );
}
