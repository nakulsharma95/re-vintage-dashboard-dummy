import Link from 'next/link';
import styles from './style.module.scss';

export default function ButtonPrimary(props) {
  return (
    <Link
      href={props.buttonLink || '/'}
      className={`${styles.btnPrimary} ${
        props.white ? styles.white : styles.primary
      }`}
    >
      {props.iconLeft && (
        <div className={styles.iconLeft}>{props.iconLeft}</div>
      )}
      {props.title}
    </Link>
  );
}
