import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import styles from './style.module.scss';

function EmptyState(props) {
  return (
    <div className={styles.emptyState}>
      {(props.icon && <span>{props.icon}</span>) || (
        <RiErrorWarningLine color="#DA291C" size={46} />
      )}
      {props.title && <div className={styles.titleLarge}>{props.title}</div>}
      {props.description && (
        <div className={styles.description}>{props.description}</div>
      )}
      {props.children && (
        <div className={styles.description}>{props.children}</div>
      )}
    </div>
  );
}

export default EmptyState;
