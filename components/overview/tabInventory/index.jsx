import React from 'react';
import {Row,Col} from "react-bootstrap";
import CrePerformanceMatrix from '../../../components/cre-management/crePerformanceMatrix';

import styles from './style.module.scss';


function InventoryTab() {
	
  return (
	<div>
		<Row>
        <Col xxl={12} lg={12} md={12}>
          <CrePerformanceMatrix
            title1="Under Refurbishment (12)"
            title2="Pending Evaluation (31)"
            title3="Pending Content Upload (25)"
            title4="Pending Admin Approval (5)"
            creTitle="Inventory"
          />
        </Col>
      </Row>
	</div>
  )
}

export default InventoryTab