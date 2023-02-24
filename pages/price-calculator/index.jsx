import React from 'react';
import Link from 'next/link';
import { BsPlusLg } from 'react-icons/bs';
import { Col, Row } from 'react-bootstrap';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import styles from './style.module.scss';
import PricePrimaryCard from '../../components/priceCalculator/pricePrimaryCard';
import HeaderPrimary from '../../components/common/headerPrimary';

export default function PriceCalculator() {
  const priceCardData = [
    {
      imageUrl: '/images/sliderImg/bike0.png',
      title: 'Classic J',
    },
    {
      imageUrl: '/images/sliderImg/bike1.png',
      title: 'Bullet',
    },
    {
      imageUrl: '/images/sliderImg/bike2.png',
      title: 'Bullet X',
    },
    {
      imageUrl: '/images/sliderImg/bike3.png',
      title: 'Bullet ES',
    },
    {
      imageUrl: '/images/sliderImg/bike4.png',
      title: 'Himalayan',
    },
    {
      imageUrl: '/images/sliderImg/bike5.png',
      title: 'Himalayan Scram',
    },
    {
      imageUrl: '/images/sliderImg/bike6.png',
      title: 'Meteor Fireball',
    },
    {
      imageUrl: '/images/sliderImg/bike7.png',
      title: 'Meteor Stellar',
    },
    {
      imageUrl: '/images/sliderImg/bike8.png',
      title: 'Meteor Supernova',
    },

    {
      imageUrl: '/images/sliderImg/bike3.png',
      title: 'Thunderbird',
    },
    {
      imageUrl: '/images/sliderImg/bike4.png',
      title: 'GT',
    },
    {
      imageUrl: '/images/sliderImg/bike5.png',
      title: 'Continental GT',
    },
    {
      imageUrl: '/images/sliderImg/bike6.png',
      title: 'Interceptor',
    },
    {
      imageUrl: '/images/sliderImg/bike7.png',
      title: 'TBX',
    },
    {
      imageUrl: '/images/sliderImg/bike8.png',
      title: 'Classic UCE',
    },
  ];

  return (
    <div>
      <Breadcrumb title="Instant Estimator Configurator" />
      <div className={styles.priceFilterFlex}>
        <HeaderPrimary
          headerClass="mb-2"
          title="Instant Estimator Configurator"
          subTitle="Here you will find the Contact details of CRE for active Motorcycle and General Info"
        >
        </HeaderPrimary>
        <Link
          href="/price-calculator/add-motorcycle"
          className={styles.addMotorBtn}
        >
          <BsPlusLg /> Add Motorcycle
        </Link>
      </div>
      <div className={styles.priceResultText}>18 item found</div>
      <Row className="pricePrimaryCol">
        {priceCardData.map((item) => (
          <Col md={2}>
            <PricePrimaryCard imageUrl={item.imageUrl} priceTitle={item.title} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
