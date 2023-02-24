import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import styles from './style.module.scss';

function EmptyState(props) {
  return (
    <div className={styles.emptyState}>
      <RiErrorWarningLine color="#DA291C" size={36} />
      <div className={styles.titleLarge}>{props.title}</div>
      <div className={styles.description}>{props.children}</div>
    </div>
  );
}

export default EmptyState;
