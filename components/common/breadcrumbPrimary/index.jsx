import Link from 'next/link';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './style.module.scss';

function Breadcrumb(props) {
  return (
    <div className="w-100">
      <Row className={styles.breadcrumbsMain}>
        <Col md={12}>
          <nav className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbsItem}>
              Home
            </Link>
            <Link href="/" className={styles.breadcrumbsItem}>
              {props.title}
            </Link>
            {props.addmoretitle && (
              <Link href="/" className={styles.breadcrumbsItem}>
                {props.addmoretitle}
              </Link>
            )}
          </nav>
        </Col>
      </Row>
    </div>
  );
}

export default Breadcrumb;
