import React from 'react';
import { Card, Image } from 'react-bootstrap';
import styles from "./style.module.scss";

function DemandPrimaryCard(props) {
	return (
		<>
			<Card className={styles.demandCard}>
				<Image src={props.imgUrl} alt="not found" />
				<div className={styles.demandCardText}>
					<div className={styles.title}>{props.title}</div>
					<div className={styles.smtitle}>{props.smtitle}</div>
				</div>
			</Card>
		</>
	);
}

export default DemandPrimaryCard;
