import ActiveBikeCard from '../../../components/biddingPortal/biddingPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import Filters from '../../../components/common/filters';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';

export default function ActiveBids() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Active Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      
      <Filters 
        filterInput 
        filterButton
        title="Active Bids" 
        subTitle="Please find all the necessary details" 
        export refresh 
      />

      <div className="bottom-white-border mt-3 mb-3" />
      <div className="mb-3">25 Bids Available</div>
      <ActiveBikeCard highestBid arrowBtn />
      <DetailPagination className="mt-3" />
    </div>
  );
}
