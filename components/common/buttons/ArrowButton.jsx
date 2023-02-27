// import { Button } from "react-bootstrap";
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import styles from './style.module.scss';

export default function ArrowButton(props) {
  return (
    <div className={`${styles.arrowBtnMain} ${props.buttonStyle}`}>
      {props.detailLink ? (
        <Link href={props.detailLink} className={styles.arrowButton}>
          {props.title}
          <span className={styles.iconBox}>
            <BsChevronRight className={styles.iconBtn} />
          </span>
        </Link>
      ) : (
        <button
          type="button"
          className={styles.arrowButton}
          onClick={props.onClick}
        >
          {props.title}
          <span className={styles.iconBox}>
            <BsChevronRight className={styles.iconBtn} />
          </span>
        </button>
      )}
    </div>
  );
}
