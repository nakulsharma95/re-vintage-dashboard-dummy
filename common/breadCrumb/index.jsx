import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './style.module.scss';

function Breadcrumb() {
  return (
    <div>
      <Row className={styles.breadcrumbsMain}>
        <Col md={12}>
          <nav className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbsItem}>
              Home
            </Link>
            <Link href="/" className={styles.breadcrumbsItem}>
              Procurement
            </Link>
            <Link href="/" className={styles.breadcrumbsItem}>
              Procurement
            </Link>
          </nav>
        </Col>
      </Row>
    </div>
  );
}

export default Breadcrumb;
