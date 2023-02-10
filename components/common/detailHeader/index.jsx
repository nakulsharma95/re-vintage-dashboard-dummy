import styles from "./style.module.scss";

export default function BikeDetailTitle(props) {
	return (
	  <div className={styles.bikeDetailHead}>
		<div>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.smtitle}>{props.smtitle}</div>
		</div>
		<div className={styles.bikeDetailStatus}>
			{props.bidStatus && (
				<span>Status: </span>
			)}
			{props.statusTitle}
		</div>
	  </div>
	);
  }
  