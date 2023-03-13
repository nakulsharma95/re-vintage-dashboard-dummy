import React from 'react';
import ImgTabs from '../common/imgTabs';
import styles from './style.module.scss';

function ConditionInspection() {
  return (
    <div className={styles.inspectionMain}>
      <div className={styles.inspectionHeading}>
        <h2>Condition & Inspection</h2>
      </div>
      <ImgTabs />
    </div>
  );
}

export default ConditionInspection;
