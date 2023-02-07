import { Button } from "react-bootstrap";
import styles from './style.module.scss';

export default function RedButton(props) {
  return (
    <div className={styles.arrowBtnMain}>
      <Button className={styles.redButton}>{props.title}</Button>
    </div>
  );
}
