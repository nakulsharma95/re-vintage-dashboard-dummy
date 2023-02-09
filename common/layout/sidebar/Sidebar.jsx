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
              <Link href="/procurement/evaluation-requests">
                Evaluation Requests
              </Link>
            </li>
            <li>
              <Link href="/procurement/scheduled-evaluation">
                Scheduled Evaluation
              </Link>
            </li>
            <li>
              <Link href="/procurement/complete-evaluation">
                Completed Evaluation
              </Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="1">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/bidding-portal">Bidding Portal</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/bidding-portal/upcoming-bids">Upcoming</Link>
            </li>
            <li>
              <Link href="/bidding-portal/active-bids">Active Bids</Link>
            </li>
            <li>
              <Link href="/bidding-portal/closed-bids">Closed Bids</Link>
            </li>
            <li>
              <Link href="/bidding-portal/seller-portal">Seller Portal</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="2">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/deal-closure">Deal Closure</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/deal-closure/under-negotiation">Under Negotiation</Link>
            </li>
            <li>
              <Link href="/deal-closure/motorcycle-pickup">Motorcycle Pickup</Link>
            </li>
            <li>
              <Link href="/deal-closure/payment-pending">Payment Pending</Link>
            </li>
            <li>
              <Link href="/deal-closure/procured">Procured</Link>
            </li>
            <li>
              <Link href="/deal-closure/dropped">Dropped</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item className={styles.accordionItems} eventKey="3">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/retail">Retail</Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/retail/inventory">Inventory</Link>
            </li>
            <li>
              <Link href="/retail/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link href="/retail/test-rider-requests">Test ride requests</Link>
            </li>
            <li>
              <Link href="/retail/booking">Booking</Link>
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
