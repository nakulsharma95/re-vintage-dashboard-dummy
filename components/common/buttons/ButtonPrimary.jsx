import { Button } from 'react-bootstrap';
import styles from './style.module.scss';

export default function ButtonPrimary(props) {
  return <Button className={styles.buttonPrimary}>{props.title}</Button>;
}
