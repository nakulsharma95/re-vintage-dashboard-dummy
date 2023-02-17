import { Card, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiRupee } from 'react-icons/bi';
import { FiCopy } from 'react-icons/fi';
import Filters from '../../../components/common/filters';
import DetailPagination from '../../../components/common/paginationPrimary';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import styles from './style.module.scss';
import BiddingTimer from '../../../components/biddingPortal/biddingTimer';
import SortTabs from '../../../components/common/sortTabs';
import ArrowButton from '../../../components/common/buttons/ArrowButton';
import CustomCheckBox from '../../../components/common/customCheckBox';
import SellerPrimaryCard from '~/components/biddingPortal/sellerPrimaryCard';

export default function ClosedBids() {
  const activeBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
      bikeName: '2015 Classic 350',
      bikeNumber: 'DL 6T AL 7314',
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
      <Filters
        filterInput
        filterButton
        title="Seller Portal"
        subTitle="Please find all the necessary details"
        export
      />
      <div className="bottom-white-border mt-3 mb-2" />
      <SortTabs selectAllCheck />
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
