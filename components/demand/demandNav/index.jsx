import Link from 'next/link';
import React from 'react';
import styles from "./style.module.scss";

function DemandNav() {
  return (
    <>      
      <div className={styles.demandNav}>
        <ul>
          <li><Link href="/">Requirement Req.</Link></li>
          <li><Link href="/">Wishlist</Link></li>
        </ul>
      </div>
    </>
  );
}

export default DemandNav;
