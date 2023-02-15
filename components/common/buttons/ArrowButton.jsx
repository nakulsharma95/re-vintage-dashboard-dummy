// import { Button } from "react-bootstrap";
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';
import styles from './style.module.scss';

export default function ArrowButton(props) {
  return (
    <div className={styles.arrowBtnMain}>
      {/* <Button className={styles.arrowButton}>{props.title} <span><BsChevronRight /></span></Button> */}
      <Link href={props.detailLink} className={styles.arrowButton}>
        {props.title}
        <BsChevronRight className={styles.iconBtn} />
      </Link>
    </div>
  );
}
