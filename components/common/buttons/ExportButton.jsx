import { Button } from 'react-bootstrap';
import { RiShareBoxFill } from 'react-icons/ri';
import styles from './style.module.scss';

export default function ExportButton(props) {
  return (
    <div className={styles.arrowBtnMain}>
      <Button className={styles.downloadReportButton}>
        {props.title} <RiShareBoxFill />
      </Button>
    </div>
  );
}
