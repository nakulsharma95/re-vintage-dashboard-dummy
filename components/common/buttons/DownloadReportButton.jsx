import { Button } from 'react-bootstrap';
import { BiDownload } from 'react-icons/bi';
import styles from './style.module.scss';

export default function DownloadReportButton(props) {
  return (
    <div>
      <Button className={styles.downloadReportButton}>
        <BiDownload />
        {props.title}
      </Button>
    </div>
  );
}
