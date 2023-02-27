import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './style.module.scss';

function DemandNav() {
  const router = useRouter();
  const isDemand = router.pathname !== '/demand';
  const isRequirement = router.pathname !== '/demand/customer-requirements';
  return (
    <div className={styles.demandNav}>
      <ul>
        <li className={!isRequirement ? styles.navActive : ''}>
          <Link href="/demand/customer-requirements">Requirement Req.</Link>
        </li>
        <li className={!isDemand ? styles.navActive : ''}>
          <Link href="/demand">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}

export default DemandNav;
