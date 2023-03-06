import { Card } from 'react-bootstrap';
import styles from './style.module.scss';

export default function TotalCard(props) {
  return (
    <Card className={styles.totalCard}>
      <Card.Body className={styles.totalCardBody}>
        <h3>{props.cardtitle}</h3>
      </Card.Body>
    </Card>
  );
}
