import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import FilterButton from '../../../components/common/filterButton';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import SellerPrimaryCard from '../../../components/biddingPortal/sellerPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import SortTabs from '../../../components/common/sortTabs';

export default function ClosedBids() {
  const activeBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7314',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Mumbai, Maharashtra',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL 6T AL 7315',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL 6T AL 7316',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Rajasthan',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL 6T AL 7317',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Uttar Pradesh',
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Seller Portal" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>

      <HeaderPrimary
        headerClass="mb-2"
        title="Seller Portal"
        subTitle="Please find all the necessary details"
      >
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>

      <div className="bottom-white-border mt-3 mb-2" />
      <SortTabs
        selectAllCheck
        isCheckInput
        isSubmitBtn
        sortTabTitle="25 Bids Available"
      />
      <Row className="mb-3">
        {activeBikeData.map((item) => (
          <Col md={3}>
            <SellerPrimaryCard
              ArrowButton
              bikeName={item.bikeName}
              bikeNumber={item.bikeNumber}
              imageUrl={item.imageUrl}
              sellerId={item.sellerId}
              kmDrive={item.kmDrive}
              modelYear={item.modelYear}
              location={item.location}
            />
          </Col>
        ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
