import Link from 'next/link';
import { BsChevronLeft } from 'react-icons/bs';
import styles from './style.module.scss';

export default function BackButton(props) {
  return (
    <Link href={props.backLink} className={styles.backButton}>
      <BsChevronLeft />
      {props.title}
    </Link>
  );
}
