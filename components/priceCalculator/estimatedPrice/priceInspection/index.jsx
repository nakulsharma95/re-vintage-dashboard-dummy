import React from 'react';
import { Image } from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
import styles from "./style.module.scss";


export default function PriceInspection(props) {
	return (
		<div className={styles.priceInspectionMain}>
			<div className={styles.title}>{props.headingTitle}</div>
			<div className={styles.performanceTitle}>
				<p>Average</p>
				<p>Good</p>
				<p>Excellent</p>
			</div>
			<Image src="/images/dummy-graph.jpg" alt="" />

			<div className={styles.estimatedPrice}>
				<h3><span><BiRupee />{props.priceOne}</span> - <span><BiRupee />{props.priceTwo}</span></h3>
				<p>You may get a better price upon inspection</p>
			</div>
		</div>
	);
}
