import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import { BiCheck } from 'react-icons/bi';
import FilterButton from '../../../components/common/filterButton';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import SellerPrimaryCard from '../../../components/biddingPortal/sellerPrimaryCard';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import DetailPagination from '../../../components/common/paginationPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import ToggleView from '../../../components/common/toggleView';
import CustomCheckBox from '../../../components/common/customCheckBox';

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
      bikeNumber: 'DL6TAL7315',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Delhi',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7316',
      sellerId: 'CSFDJG548798',
      kmDrive: '48,523 KM',
      modelYear: '2020',
      location: 'Rajasthan',
    },
    {
      imageUrl: '/images/bikeImage4.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL6TAL7317',
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
        <BiddingTimer biddingStartTime={14} biddingEndTime={17} />
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

      {/* Action Section */}
      <div className="action-list-style my-3">
        <div className="left-sec">
          <h5 className="title3">25 Bids Available</h5>
          <div className="vertical-divider" />
          <div className="d-flex align-items-center">
            <CustomCheckBox checkTitle="Select all -" className="me-2" />
            <OutlineButton
              leftIcon={<BiCheck className="m-0 me-2" />}
              title="Submit Selected"
            />
          </div>
        </div>

        <div className="right-sec">
          <ToggleView />
        </div>
      </div>

      {/* Action Section End */}

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
