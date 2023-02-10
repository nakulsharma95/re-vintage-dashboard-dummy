import { BsChevronLeft } from "react-icons/bs";
import styles from './style.module.scss';

export default function BackButton(props) {
  return (
      <a href={props.backLink} className={styles.backButton}><span><BsChevronLeft /></span> {props.title}</a>
  );
}
