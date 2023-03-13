import Link from 'next/link';
import React from 'react';
import { Form, Image } from 'react-bootstrap';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from './style.module.scss';

export default function EvaluteForm() {
  return (
    <Form className={styles.evaluteFormMain}>
      <div className={styles.evaluteFlex}>
        <Form.Group className={styles.formGroup}>
          <Form.Control type="text" placeholder="Model" />
          <span className={styles.iconImg}>
            <Image src="/images/icons/bike-white.svg" alt="" />
          </span>
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Control type="text" placeholder="Engine CC" />
          <span className={styles.iconImg}>
            <Image src="/images/icons/bike-white.svg" alt="" />
          </span>
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Control type="text" placeholder="Year" />
          <span className={styles.iconImg}>
            <Image src="/images/icons/calendar.svg" alt="" />
          </span>
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Control type="text" placeholder="Owner" />
          <span className={styles.iconImg}>
            <Image src="/images/icons/user.svg" alt="" />
          </span>
        </Form.Group>
        <Form.Group className={styles.formGroup}>
          <Form.Control type="text" placeholder="KM Driven" />
          <span className={styles.iconImg}>
            <Image src="/images/icons/road.svg" alt="" />
          </span>
        </Form.Group>
        <Link href="/price-calculator/estimated-price" variant="" type="submit">
          Evaluate <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </Form>
  );
}
