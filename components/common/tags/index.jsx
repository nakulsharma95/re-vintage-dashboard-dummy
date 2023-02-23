import styles from './style.module.scss';

export default function Tags(props) {
  return (
    <div className={styles.tags} style={{ backgroundColor: props.bgColor }}>
      {props.title}
    </div>
  );
}
