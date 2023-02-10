import { Button } from 'react-bootstrap';
import { FaFileExport } from 'react-icons/fa';
import styles from './style.module.scss';

export default function ExportButton(props) {
  return (
    <div className={styles.arrowBtnMain}>
      <Button className={styles.downloadReportButton}>
        {props.title} <FaFileExport />
      </Button>
    </div>
  );
}
