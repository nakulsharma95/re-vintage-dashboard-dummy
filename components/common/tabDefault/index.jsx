import React from 'react'
import { Tab,Tabs, Col,Row } from 'react-bootstrap';

import styles from './style.module.scss';

function tabDefault(props) {
  return (
	<Row>
      
	  <div className='defaultTab'>
	  <Tabs
            className={`${styles.defaultTabs} mb-3`}
            defaultActiveKey="title1"
            id="uncontrolled-tab-example"
          >
            <Tab
              className={`${styles.defaultTab}`}
              eventKey="title1"
              title="Retail"
            />
            <Tab
               className={styles.defaultTab}
              eventKey="title2"
              title="Inventory"
            />

            <Tab
              className={styles.reNavTab}
              eventKey="title3"
              title="Revenue"
            />          
          </Tabs>
	  </div>
	  
	</Row>
  )
}

export default tabDefault;