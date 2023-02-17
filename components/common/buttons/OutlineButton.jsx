import { Button } from 'react-bootstrap';
import styles from './style.module.scss';

export default function OutlineButton(props) {
  return (
    <Button className={`${styles.outlineButtonContainer} ${props.className}`}>
      {props.leftIcon && <span className="">{props.leftIcon}</span>}
      {props.title}
      {props.rightIcon && <span className="">{props.rightIcon}</span>}
    </Button>
  );
}
