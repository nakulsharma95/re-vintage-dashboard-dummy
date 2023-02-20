import React from 'react';
import PieBig from '../pieBig';
import PieSmall from '../pieSmall';
import styles from './style.module.scss';
import ProcurementTable from '../procurementTable';
import DealClouser from '../dealClouser';

function LeadSection() {
  return (
    <div className={styles.leads}>
      <div className={styles.leadsTop}>
        <PieSmall withouticon />
        <div className={`${styles.leadTable}  dashboardTable`}>
        <ProcurementTable />
        </div>
      </div>
      <div className={styles.leadsMiddle}>
        <div className={`${styles.leadMidTable} dashboardTable leadTable`}>
          <DealClouser/>
          
        </div>

        <PieSmall icon />
        <PieSmall icon />
      </div>
      <div className={styles.leadsBottom}>
        <PieBig />
      </div>
    </div>
  );
}

export default LeadSection;
