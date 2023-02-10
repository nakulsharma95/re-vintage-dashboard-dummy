import styles from './style.module.scss';

export default function BiddingTimer(props) {
  return (
    <div className={styles.biddingTimer}>
		{props.title}
		<span>{props.timer}</span>
	</div>
  );
}
