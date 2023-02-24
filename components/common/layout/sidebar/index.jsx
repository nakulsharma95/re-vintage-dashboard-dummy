import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import { FiBarChart2, FiUsers } from 'react-icons/fi';
import { BiRupee } from 'react-icons/bi';
import { BsFileEarmarkText, BsGraphUp } from 'react-icons/bs';
import { Image } from 'react-bootstrap';
import styles from './style.module.scss';

export default function Sidebar(props) {
  return (
    <div className={`${styles.sideBarContainer} ${props.containerStyle}`}>
      <Accordion className={styles.reAccordion} defaultActiveKey="">
        <li>
          <Link href="/homepage">
            <span className={styles.navIcon}>
              <FiBarChart2 />
            </span>
            Overview
          </Link>
        </li>
        <Accordion.Item className={styles.accordionItems} eventKey="0">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/procurement">
              <span className={styles.navIcon}>
                <BsFileEarmarkText />
              </span>
              Procurement
              <span className={styles.sideBarbadge}>3</span>
            </Link>
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
            <Link href="/bidding-portal">
              <span className={styles.navIcon}>
                <BsFileEarmarkText />
              </span>
              Bidding Portal
            </Link>
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
            <Link href="/deal-closure">
              <span className={styles.navIcon}>
                <BsFileEarmarkText />
              </span>
              Deal Closure
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/deal-closure/under-negotiation">
                Under Negotiation
              </Link>
            </li>
            <li>
              <Link href="/deal-closure/motorcycle-pickup">
                Motorcycle Pickup
              </Link>
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
            <Link href="/retail">
              <span className={styles.navIcon}>
                <BsFileEarmarkText />
              </span>
              Retail
            </Link>
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
          <Link href="/non-re">
            <span className={styles.navIcon}>
              <Image src="/images/motorcycle.svg" alt="no found" />
            </span>
            Non-RE
          </Link>
        </li>

        <Accordion.Item className={styles.accordionItems} eventKey="4">
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/demand">
              <span className={styles.navIcon}>
                <BsGraphUp />
              </span>
              Demand
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li>
              <Link href="/demand/customer-requirements">
                Customer requirements
              </Link>
            </li>
            <li>
              <Link href="/demand">Wishlist</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <li>
          <Link href="/price-calculator">
            <span className={styles.navIcon}>
              <BiRupee />
            </span>
            Price Calculator
          </Link>
        </li>

        <li>
          <Link href="/cre-management">
            <span className={styles.navIcon}>
              <FiUsers />
            </span>
            CRE Management
          </Link>
        </li>
        <li>
          <Link href="/dealer-management">
            <span className={styles.navIcon}>
              <FiUsers />
            </span>
            Dealer Management
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className={styles.navIcon}>
              <BsFileEarmarkText />
            </span>
            Report
          </Link>
        </li>
        <li>
          <Link href="/escalation">
            <span className={styles.navIcon}>
              <BsFileEarmarkText />
            </span>
            Escalations
          </Link>
        </li>
      </Accordion>
    </div>
  );
}
