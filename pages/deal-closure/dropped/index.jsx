import { Col, Row } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import SortByDropdown from '../../../components/common/sortByDropdown';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import FilterButton from '../../../components/common/filterButton';
import HeaderPrimary from '../../../components/common/headerPrimary';
import SearchPrimary from '../../../components/common/searchPrimary';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function PaymentsPending() {
  const cardData = [
    {
      imageUrl: '/images/bikeImage.png',
      overDue: 'evolutionOver',
      bikeStatus: 'Upload Content',
    },
    {
      imageUrl: '/images/bikeImage2.png',
      bikeStatus: 'Under Refurbishment',
    },
    {
      imageUrl: '/images/bikeImage3.png',
      bikeStatus: 'Under Approval',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <>
      <Breadcrumb title="Deal Closure" addmoretitle="Payment Pending" />
      <HeaderPrimary headerClass="mb-2" title="Dropped">
        <OutlineButton title="Export Data" rightIcon={<RiShareBoxFill />} />
        <SearchPrimary placeholder="Search Name, Location, Reference ID" />
        <FilterButton />
      </HeaderPrimary>
      <div className="bottom-white-border mt-3 mb-3" />

      <div className="action-list-style my-3">
        <div className="left-sec">
          <h5 className="title3">3 Leads</h5>
          <div className="vertical-divider" />
        </div>

        <div className="right-sec">
          <SortByDropdown
            droptitle="Select Relevant"
            options={['Most Relevant', 'Relevant']}
          />
        </div>
      </div>

      <Row>
        {cardData.map((item) => (
          <Col xxl={3} xl={4} lg={6} md={6} xs={6} className="p-xs-1">
            <CloserBikeCard
              data={item}
              isHighestBid="Highest Bid"
              isKmDriven
              contactCSE
              reason
              location
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PaymentsPending;
