import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './style.module.scss';

export default function PricePrimaryCard(props) {
  return (
    <div className={styles.priceBox}>
		<div className={styles.priceImg}>
			<Image 
				src={props.imageUrl}
				alt="not-found" 
			/>
		</div>
		<div className={styles.priceTitle}>{props.priceTitle}</div>
	</div>
  );
}
