import Link from 'next/link';
import styles from './style.module.scss';

export default function ButtonPrimary(props) {
  return (
    <Link
      href={props.buttonLink || '/'}
      className={props.btnWhite ? styles.buttonWhite : styles.buttonPrimary}
    >
      {props.title}
    </Link>
  );
}
