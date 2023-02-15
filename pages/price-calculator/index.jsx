import React from 'react';
import Link from 'next/link';
import Breadcrumb from '../../components/common/breadcrumbPrimary';
import Filters from '../../components/common/filters';
import styles from './style.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { Row, Image } from 'react-bootstrap';

export default function PriceCalculator() {
	const priceCardData = [
		{
		  bikeImg: 'bike0.png',
		  priceTitle: 'Classic J',
		},
		{
			bikeImg: 'bike1.png',
			priceTitle: 'Bullet',
		},
		{
			bikeImg: 'bike2.png',
			priceTitle: 'Bullet X',
		},
		{
			bikeImg: 'bike3.png',
			priceTitle: 'Bullet ES',
		},
		{
			bikeImg: 'bike4.png',
			priceTitle: 'Himalayan',
		},
		{
			bikeImg: 'bike5.png',
			priceTitle: 'Himalayan Scram',
		},
		{
			bikeImg: 'bike6.png',
			priceTitle: 'Meteor Fireball',
		},
		{
			bikeImg: 'bike7.png',
			priceTitle: 'Meteor Stellar',
		},
		{
			bikeImg: 'bike8.png',
			priceTitle: 'Meteor Supernova',
		},

		{
			bikeImg: 'bike3.png',
			priceTitle: 'Thunderbird',
		},
		{
			bikeImg: 'bike4.png',
			priceTitle: 'GT',
		},
		{
			bikeImg: 'bike5.png',
			priceTitle: 'Continental GT',
		},
		{
			bikeImg: 'bike6.png',
			priceTitle: 'Interceptor',
		},
		{
			bikeImg: 'bike7.png',
			priceTitle: 'TBX',
		},
		{
			bikeImg: 'bike8.png',
			priceTitle: 'Classic UCE',
		},
	  ];

	return (
	  <div>
		<div className="d-flex align-items-center justify-content-between">
		  <Breadcrumb title="Instant Estimator Configurator" />
		</div>
		<div className={styles.priceFilterFlex}>
			<Filters title="Instant Estimator Configurator" subTitle="Here you will find the Contact details of CRE for active Motorcycle and General Info" />
			<Link href="/add-motorcycle" className={styles.addMotorBtn}><BsPlusLg /> Add Motorcycle</Link>
		</div>
		<div className={styles.priceResultText}>18 item found</div>
		<Row>
		{priceCardData.map(({bikeImg, index, priceTitle}) => (
			<div className={styles.priceCols} key={index}>
				<div className={styles.priceBox}>
					<div className={styles.priceImg}>
						<Image 
							src={`/images/sliderImg/${bikeImg}`}
							alt="not found"
						/>
					</div>
					<div className={styles.priceTitle}>{priceTitle}</div>
				</div>
			</div>
		))}
		</Row>
	  </div>
	);
}
