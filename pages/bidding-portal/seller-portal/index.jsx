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

export default function ClosedBids() {
  const activeBikeData = [
    {
      imageUrl: '/images/bikeImage.png',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage3.png',
    },
    {
      imageUrl: '/images/bikeImage4.png',
    },
  ];
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <Breadcrumb title="Bidding Portal" addmoretitle="Seller Portal" />
        <BiddingTimer title="Bidding is active now!" timer="02 : 23 : 36" />
      </div>
      <Filters title="Seller Portal" subTitle="Please find all the necessary details" export />
      <div className="bottom-white-border mt-3 mb-2" />
      <SortTabs selectAllCheck />
      <Row className="mb-3">
        {activeBikeData.map((item) => (
          <Col md={3} key={item.id}>
            <Card className={styles.bikeCardCols}>
              <Card.Img
                className={styles.bikeImg}
                variant="top"
                src={item.imageUrl}
                alt="not-found"
              />
              <div className={styles.selectBoxCheck}>
                <CustomCheckBox />
              </div>
              <Card.Body className={styles.cardPanel}>
                <Card.Title className={styles.bikeName}>
                  2015 Classic 350{' '}
                  <span>
                    - DL 6T AL 7314 <FiCopy className={styles.copyIcon} />
                  </span>
                </Card.Title>
                <div className={styles.priceList}>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className={styles.sbTitle}>Seller Portal ID:</div>
                    <div>
                      CSFDJG548798 <FiCopy className={styles.copyIcon} />
                    </div>
                  </div>
                  <div className={styles.sellerPrice}>
                    <div className={styles.sbTitle}>Seller Portal Price</div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>
                        <BiRupee />
                      </span>
                      <Form.Control
                        type="text"
                        value="1,25,00,000"
                        id=""
                        name=""
                      />
                      <Button variant="" className={styles.submitBtn}>
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={styles.addtionalInfo}>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className={styles.infoTitle}>KMs Driven</span>
                    <span className={styles.infoTitle}>Model</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span>48,523 KM</span>
                    <span>2020</span>
                  </div>
                  <div className={styles.locationText}>
                    <span>Location</span> Mumbai, Maharashtra
                  </div>
                </div>
                <div className={styles.cardBtnCols}>
                  <ArrowButton title="VIEW DETAILS" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <DetailPagination className="mt-3" />
    </div>
  );
}
