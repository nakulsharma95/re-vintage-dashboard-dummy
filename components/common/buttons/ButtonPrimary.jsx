import Link from 'next/link';
import styles from './style.module.scss';

export default function ButtonPrimary(props) {
  return (
    <div>
      {props.buttonLink ? (
        <Link
          href={props.buttonLink || '/'}
          className={`${styles.btnPrimary} ${
            props.white ? styles.white : styles.primary
          } ${props.className}`}
        >
          {props.iconLeft && (
            <div className={styles.iconLeft}>{props.iconLeft}</div>
          )}
          {props.title}
          {props.iconRight && (
            <div className={styles.iconRight}>{props.iconRight}</div>
          )}
        </Link>
      ) : (
        <button
          type="button"
          onClick={props.onClick}
          className={`${styles.btnPrimary} ${
            props.white ? styles.white : styles.primary
          } ${props.className}`}
        >
          {props.iconLeft && (
            <div className={styles.iconLeft}>{props.iconLeft}</div>
          )}
          {props.title}
          {props.iconRight && (
            <div className={styles.iconRight}>{props.iconRight}</div>
          )}
        </button>
      )}
    </div>
  );
}
