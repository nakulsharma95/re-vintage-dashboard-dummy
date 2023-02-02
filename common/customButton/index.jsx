import { BsArrowLeftShort } from 'react-icons/bs';
import styles from './style.module.scss';

export default function CustomButton() {
  return (
    <div className={styles.customButtonContainer}>
      <button type="button" className={styles.detailCustomBtn}>
        Previous
        <BsArrowLeftShort />
      </button>
    </div>
  );
}
