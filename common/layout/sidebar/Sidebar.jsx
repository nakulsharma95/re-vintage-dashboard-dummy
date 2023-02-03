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
          <Accordion.Header className={styles.headerStyle}>
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
              <Link href="/procurement/scheduled-evaluation">
                Scheduled Evaluation
              </Link>
            </li>
            <li>
              <Link href="/">Completed Evaluation</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="1">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/">Bidding Portal</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/">Upcoming</Link>
            </li>
            <li>
              <Link href="/">Active Bids</Link>
            </li>
            <li>
              <Link href="/">Closed Bids</Link>
            </li>
            <li>
              <Link href="/">Seller Portal</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="2">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/">Deal Closure</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/">Under Negotiation</Link>
            </li>
            <li>
              <Link href="/">Motorcycle Pickup</Link>
            </li>
            <li>
              <Link href="/">Payment Pending</Link>
            </li>
            <li>
              <Link href="/">Procured</Link>
            </li>
            <li>
              <Link href="/">Dropped</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="3">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/">Retail</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/">Inventory</Link>
            </li>
            <li>
              <Link href="/">Marketplace</Link>
            </li>
            <li>
              <Link href="/">Test ride requests</Link>
            </li>
            <li>
              <Link href="/">Test ride requests</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <li>
          <Link href="/">Non-RE</Link>
        </li>

        <Accordion.Item className={styles.accordionItems} eventKey="4">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/">Demand</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/">Customer requirements</Link>
            </li>
            <li>
              <Link href="/">Wishlist</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <li>
          <Link href="/">Price Calculator</Link>
        </li>

        <li>
          <Link href="/">CRE Management</Link>
        </li>
        <li>
          <Link href="/">Dealer Management</Link>
        </li>
        <li>
          <Link href="/">Report</Link>
        </li>
        <li>
          <Link href="/">Escalations</Link>
        </li>
      </Accordion>
    </div>
  );
}
