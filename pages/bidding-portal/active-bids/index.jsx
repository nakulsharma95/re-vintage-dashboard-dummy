import ActiveBikeCard from '../../../common/biddingBikeCard/ActiveBikeCard';
import Breadcrumb from 'common/breadCrumb';
import DetailPagination from 'common/detailPagination';
import Filters from 'common/filters';
import TabPrimary from 'common/tabPrimary';
import BiddingTimer from 'common/biddingtimer';

export default function ActiveBids() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Active Bids" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters title="Active Bids" />
      <TabPrimary 
        title1="Today" 
        title2="Next Bidding (31 Dec)"
      />
      <div className="mb-3">25 Bids Available</div>
	    <ActiveBikeCard />
      <DetailPagination className="mt-3" />
    </div>
  );
}
