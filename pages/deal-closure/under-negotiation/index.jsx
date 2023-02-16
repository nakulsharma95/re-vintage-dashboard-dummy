import { Row, Col } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import Filters from '../../../components/common/filters';
import DetailPagination from '../../../components/common/paginationPrimary';
import SortTabs from '../../../components/common/sortTabs';
import TabPrimary from '../../../components/common/tabPrimary';
import CloserBikeCard from '../../../components/dealClosure/closerCard';

function UnderNegotiation() {
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
      <Breadcrumb title="Deal Closure" addmoretitle="Under Negotiation" />
      <Filters title="Under Negotiation" export filterInput filterButton />
      <TabPrimary title1="OpDealer (25)en" title2="Seller Portal (12)" />
      <Row>
        <SortTabs />
        {cardData.map((item, index) => {
          return (
            <Col md={3} key={index}>
              <CloserBikeCard
                data={item}
                location
                status
                contactCSE
                isHighestBid="Highest Bid"
                isKmDriven
              />
            </Col>
          );
        })}
      </Row>
      <DetailPagination />
    </>
  );
}

export default UnderNegotiation;
