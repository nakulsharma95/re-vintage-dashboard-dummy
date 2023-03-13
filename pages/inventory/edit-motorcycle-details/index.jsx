import { Col, Row } from 'react-bootstrap';
import Breadcrumb from '../../../components/common/breadcrumbPrimary';
import HeaderPrimary from '../../../components/common/headerPrimary';
import EditDetails from '../../../components/editMotorcycleCard';
import styles from './style.module.scss';
import OutlineButton from '../../../components/common/buttons/OutlineButton';
import ButtonPrimary from '../../../components/common/buttons/ButtonPrimary';
import UserBikeDetailCard from '../../../components/userBikeDetailCard';
import AddDescription from '../../../components/addDescription';
import SetPrice from '../../../components/setPrice';

export default function EditMotorcycleDetails() {
  const editCard = [
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
    {
      imageUrl: '/images/bikeImage2.png',
    },
  ];

  const userDetail = [
    {
      title: 'Owner',
      description: '2nd Owner',
      imageUrl: '/images/user.svg',
    },

    {
      title: 'KM Driven',
      description: '14,634 KM',
      imageUrl: '/images/km-icon.svg',
    },

    {
      title: 'RTO Location',
      description: 'New Delhi',
      imageUrl: '/images/user.svg',
    },

    {
      title: 'Registered in',
      description: 'Feb 2020',
      imageUrl: '/images/road.svg',
    },
    {
      title: 'Insurance upto',
      description: 'Feb 2023',
      imageUrl: '/images/upto.svg',
    },
    {
      title: 'Mileage',
      description: 'Mileage',
      imageUrl: '/images/milege.svg',
    },
  ];
  return (
    <div>
      <Breadcrumb title="Inventory" addmoretitle="Edit Motorcycle Details" />

      <HeaderPrimary
        headerClass="mb-4"
        title="Edit Motorcycle Details"
        subTitle="Please fill all the necessary details below"
      />

      <div className={styles.detailsbg}>
        <div className={styles.detailsHeading}>
          <h2>HUNTER 350</h2>
          <span>- DL 6T HA 1132</span>
          <p>- FB29FH9219HR1</p>
        </div>

        <div className={styles.detailsDescription}>
          <span>Location:</span>
          <p>Mumbai, Maharashtra</p>
        </div>

        <Row>
          {editCard.map((item) => (
            <Col xxl={2} xl={3} lg={4} md={6}>
              <EditDetails imageUrl={item.imageUrl} />
            </Col>
          ))}
        </Row>

        <div className="user-detail-card">
          {userDetail.map((item) => (
            <UserBikeDetailCard
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              priceValue={item.priceValue}
            />
          ))}
        </div>

        <div className="bottom-white-border mt-3 mb-3" />

        <SetPrice />
      </div>

      <AddDescription />

      <div className="fixed-Footer">
        <div className="mx-3">
          <OutlineButton title="Cancel" className="theme1" />
        </div>
        <div>
          {' '}
          <ButtonPrimary title="Save" />
        </div>
      </div>
    </div>
  );
}
