import styles from './style.module.scss';

function BottomActionBar(props) {
  return <div className={styles.filterBar}>{props.children}</div>;
}
export default BottomActionBar;
