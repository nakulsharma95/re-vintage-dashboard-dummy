import React from 'react';
import PieBig from '../pieBig';
import PieSmall from '../pieSmall';
import styles from './style.module.scss';
import ProcurementTable from '../procurementTable';
import DealClouser from '../dealClouser';

function LeadSection() {
  return (
    <div className={styles.leadSection}>
      <div className={styles.leadsTop}>
        <PieSmall title="Source" />
        <div className={`${styles.leadTable}  dashboardTable`}>
          <ProcurementTable />
        </div>
      </div>

      <div className={styles.leadsMiddle}>
        <div className={`${styles.leadMidTable} dashboardTable leadTable`}>
          <DealClouser />
        </div>

        <PieSmall title="Procurement - Partners" />
        <PieSmall title="Procurement - Model Mix" />
      </div>
      <div className={styles.leadsBottom}>
        <PieBig title="Bidding Overview" />
      </div>
    </div>
  );
}

export default LeadSection;
