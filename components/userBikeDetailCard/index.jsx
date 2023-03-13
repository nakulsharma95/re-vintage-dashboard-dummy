import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

export default function UserBikeDetailCard(props) {
  return (
    <div className={`${styles.userDetailCard} py-2`}>
      <div className={`${styles.cardHead}`}>
        <div className="d-flex align-items-center justify-content-center">
          <div className={styles.imgIcon}>
            <Image
              src={props.imageUrl}
              width="14"
              height="14"
              alt="not found"
            />
          </div>

          <div className="">
            <h3 className={styles.title}>
              {props.title} <br /> {props.titleBr}
            </h3>
            <div className={styles.numbers}>{props.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
