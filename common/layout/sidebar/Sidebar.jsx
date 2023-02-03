import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import styles from './style.module.scss';

export default function Sidebar() {
  return (
    <div className={styles.sideBarContainer}>
      <Accordion className={styles.reAccordion} defaultActiveKey="0">
        <li>
          <Link href="/">Overview</Link>
        </li>
        <Accordion.Item className={styles.accordionItems} eventKey="0">
          <Accordion.Header>
            <Link href="/procurement">Procurement</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/procurement/partial-leads">Partial Leads</Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link href="/procurement/evaluation-requests">Evaluation Requests</Link>
=======
              <Link href="/">Evaluation Requests</Link>
>>>>>>> c680e4dd91b87cba7eba11b272b5061ca454e922
            </li>
            <li>
              <Link href="/procurement/scheduled-evaluation">Scheduled Evaluation</Link>
            </li>
            <li>
              <Link href="/">Completed Evaluation</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className={styles.accordionItems} eventKey="1">
          <Accordion.Header>
            <Link href="/">Bidding Portal</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/">Hello</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
