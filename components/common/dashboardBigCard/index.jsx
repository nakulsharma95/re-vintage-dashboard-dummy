import React from 'react';
import { Card, Col,Row,ProgressBar , Table  } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";
import TabDefault from '../tabDefault';
import TabPrimary from '../tabPrimary';
import { AiFillStar } from "react-icons/ai";

import styles from "./style.module.scss";

function dashboardBigCard() {
  return (
	<Row>
     <Col xxl={4} lg={6} md={6}>
	 <Card className={styles.card}>
		<div className={styles.cardHead}>
          <h4>Motorcycle Sales</h4>
		  
		  
	    <AiOutlineDownload className={styles.cardIcon}/>
		</div>
		<div className={`${styles.cardProgress} overviewProgress`}>
		
      <ProgressBar className='mt-3 my-2 bar1'  now={100} />
      <ProgressBar className='my-2 bar2' variant="info" now={70} />
      <ProgressBar className='my-2 bar3' variant="warning" now={50} />
      <ProgressBar className='my-2 bar4' variant="danger" now={40} />
      <ProgressBar className='my-2 bar5' variant="primary" now={30} />
      <ProgressBar className='my-2 bar6' variant="secondary" now={10} />
    </div>
	<hr/>
	<Row>
	<Col className="my-2" xxl={6} lg={6} md={6}>
	 <div className={`${styles.cardBar} ${styles.bar1}`}></div>Meteor
	</Col>
	<Col className="my-2" xxl={6} lg={6} md={6}>	
	<div className={`${styles.cardBar} ${styles.bar2}`}></div>Hunter
	</Col>
	<Col className="my-2" xxl={6} lg={6} md={6}>
	<div className={`${styles.cardBar} ${styles.bar3}`}></div>Continental GT
	</Col>
	<Col className="my-2" xxl={6} lg={6} md={6}>
	<div className={`${styles.cardBar} ${styles.bar4}`}></div>Himalayan
	</Col>
	<Col className="my-2" xxl={6} lg={6} md={6}>
	<div className={`${styles.cardBar} ${styles.bar5}`}></div>Himalayan
	</Col>
	<Col className="my-2" xxl={6} lg={6} md={6}>
	<div className={`${styles.cardBar} ${styles.bar6}`}></div>Himalayan
	</Col>
	
	</Row>
	
	 </Card>
	 </Col>
     <Col xxl={4} lg={6} md={6}>
	 <Card className={styles.card}>
		<div className={styles.cardHead}>
          <h4>Dealer Perfomance</h4>
		 
	    <AiOutlineDownload className={styles.cardIcon}/>
		</div>
		<TabDefault />
		<TabPrimary title1="Highest Rated" title2="Lowest Rated" />

		<div className={styles.cardBody}>
		<Table striped  hover variant="dark">
      {/* <thead>
        <tr>
          <th>Neel Motors</th>
          <th>Last Name</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
          <td>Neel Motors</td>
          <td><AiFillStar/> 4.5</td>
        </tr>
        <tr>
          <td>Neel Motors</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Neel Motors</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Neel Motors</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>Neel Motors</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
		</div>

		
	 </Card>
	 </Col>
     <Col xxl={4} lg={6} md={6}>
	 <Card className={styles.card}>
		<div className={styles.cardHead}>
          <h4>Motorcycle Sales</h4>
		  
	    <AiOutlineDownload className={styles.cardIcon}/>
		</div>
		<TabDefault />
		<TabPrimary title1="Highest Rated" title2="Lowest Rated" />

	 </Card>
	 </Col>
	</Row>
  )
}

export default dashboardBigCard