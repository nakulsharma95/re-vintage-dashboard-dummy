import React from 'react';
import { Image } from 'react-bootstrap';
import styles from "./style.module.scss";


export default function EstimatedBike(props) {
	return (
		<div className={styles.inspectionBikeMain}>
			<div className={styles.nameTitle}>{props.bikeName} <span>| {props.smBikeName}</span></div>
			<div className={styles.bikeImg}>
				<Image src="/images/bike-1.png" alt="" />
			</div>
		</div>
	);
}
