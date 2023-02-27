import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAccordionButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { BiRupee } from 'react-icons/bi';
import { BsFileEarmarkText, BsGraphUp } from 'react-icons/bs';
import { FiBarChart2, FiUsers } from 'react-icons/fi';
import { IoHammerOutline } from 'react-icons/io5';
import { RiMotorbikeLine } from 'react-icons/ri';
import { TbChartCircles } from 'react-icons/tb';
import styles from './style.module.scss';

function CustomLink({ children, eventKey, className }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <button
      type="button"
      className={`${styles.buttonStyle} ${className}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Sidebar(props) {
  const router = useRouter();
  return (
    <div
      className={`${styles.sideBarContainer} ${props.containerStyle} sidebar-global`}
    >
      <Accordion className={styles.reAccordion} defaultActiveKey="/">
        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="0"
            className={router.pathname === '/' ? 'active' : ''}
          >
            <Link href="/">
              <span className={`${styles.navIcon} nav-item`}>
                <FiBarChart2 />
              </span>
              Overview
            </Link>
          </CustomLink>
        </div>

        <Accordion.Item
          className={`${styles.accordionItems} ${
            router.pathname === '/procurement' ? 'active' : ''
          }`}
          eventKey="1"
        >
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/procurement">
              <span className={`${styles.navIcon} nav-item`}>
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

        <Accordion.Item
          className={`${styles.accordionItems} ${
            router.pathname === '/bidding-portal' ? 'active' : ''
          }`}
          eventKey="2"
        >
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/bidding-portal">
              <span className={`${styles.navIcon} nav-item`}>
                <IoHammerOutline />
              </span>
              Bidding Portal
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li
              className={
                router.pathname === '/bidding-portal/upcoming-bids'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/bidding-portal/upcoming-bids">Upcoming</Link>
            </li>
            <li
              className={
                router.pathname === '/bidding-portal/active-bids'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/bidding-portal/active-bids">Active Bids</Link>
            </li>
            <li
              className={
                router.pathname === '/bidding-portal/closed-bids'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/bidding-portal/closed-bids">Closed Bids</Link>
            </li>
            <li
              className={
                router.pathname === '/bidding-portal/seller-portal'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/bidding-portal/seller-portal">Seller Portal</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          className={`${styles.accordionItems} ${
            router.pathname === '/deal-closure' ? 'active' : ''
          }`}
          eventKey="3"
        >
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/deal-closure">
              <span className={`${styles.navIcon} nav-item`}>
                <TbChartCircles />
              </span>
              Deal Closure
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li
              className={
                router.pathname === '/deal-closure/under-negotiation'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/deal-closure/under-negotiation">
                Under Negotiation
              </Link>
            </li>
            <li
              className={
                router.pathname === '/deal-closure/motorcycle-pickup'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/deal-closure/motorcycle-pickup">
                Motorcycle Pickup
              </Link>
            </li>
            <li
              className={
                router.pathname === '/deal-closure/payment-pending'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/deal-closure/payment-pending">Payment Pending</Link>
            </li>
            <li
              className={
                router.pathname === '/deal-closure/procured' ? 'active' : ''
              }
            >
              <Link href="/deal-closure/procured">Procured</Link>
            </li>
            <li
              className={
                router.pathname === '/deal-closure/dropped' ? 'active' : ''
              }
            >
              <Link href="/deal-closure/dropped">Dropped</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          eventKey="4"
          className={`${styles.accordionItems} ${
            router.pathname === '/retail' ? 'active' : ''
          }`}
        >
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/retail">
              <span className={`${styles.navIcon} nav-item`}>
                <BsFileEarmarkText />
              </span>
              Retail
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li
              className={
                router.pathname === '/retail/inventory' ? 'active' : ''
              }
            >
              <Link href="/retail/inventory">Inventory</Link>
            </li>
            <li
              className={
                router.pathname === '/retail/marketplace' ? 'active' : ''
              }
            >
              <Link href="/retail/marketplace">Marketplace</Link>
            </li>
            <li
              className={
                router.pathname === '/retail/test-rider-requests'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/retail/test-rider-requests">Test ride requests</Link>
            </li>
            <li
              className={router.pathname === '/retail/booking' ? 'active' : ''}
            >
              <Link href="/retail/booking">Booking</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="5"
            className={router.pathname === '/non-re' ? 'active' : ''}
          >
            <Link href="/non-re">
              <span className={`${styles.navIcon} nav-item`}>
                <RiMotorbikeLine />
              </span>
              Non-RE
            </Link>
          </CustomLink>
        </div>

        <Accordion.Item
          className={`${styles.accordionItems} ${
            router.pathname === '/demand' ? 'active' : ''
          }`}
          eventKey="6"
        >
          <Accordion.Header className={styles.headerStyle}>
            <Link href="/demand">
              <span className={`${styles.navIcon} nav-item`}>
                <BsGraphUp />
              </span>
              Demand
            </Link>
          </Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            <li
              className={
                router.pathname === '/demand/customer-requirements'
                  ? 'active'
                  : ''
              }
            >
              <Link href="/demand/customer-requirements">
                Customer requirements
              </Link>
            </li>
            <li className={router.pathname === '/demand' ? 'active' : ''}>
              <Link href="/demand">Wishlist</Link>
            </li>
          </Accordion.Body>
        </Accordion.Item>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="7"
            className={router.pathname === '/price-calculator' ? 'active' : ''}
          >
            <Link href="/price-calculator">
              <span className={`${styles.navIcon} nav-item`}>
                <BiRupee />
              </span>
              Price Calculator
            </Link>
          </CustomLink>
        </div>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="8"
            className={router.pathname === '/cre-management' ? 'active' : ''}
          >
            <Link href="/cre-management">
              <span className={`${styles.navIcon} nav-item`}>
                <FiUsers />
              </span>
              CRE Management
            </Link>
          </CustomLink>
        </div>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="9"
            className={router.pathname === '/dealer-management' ? 'active' : ''}
          >
            <Link href="/dealer-management">
              <span className={`${styles.navIcon} nav-item`}>
                <FiUsers />
              </span>
              Dealer Management
            </Link>
          </CustomLink>
        </div>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="10"
            className={router.pathname === '/report' ? 'active' : ''}
          >
            <Link href="/report">
              <span className={`${styles.navIcon} nav-item`}>
                <BsFileEarmarkText />
              </span>
              Report
            </Link>
          </CustomLink>
        </div>

        <div className={styles.accordionItems}>
          <CustomLink
            eventKey="11"
            className={router.pathname === '/escalation' ? 'active' : ''}
          >
            <Link href="/escalation">
              <span className={`${styles.navIcon} nav-item`}>
                <BsFileEarmarkText />
              </span>
              Escalations
            </Link>
          </CustomLink>
        </div>
      </Accordion>
    </div>
  );
}
