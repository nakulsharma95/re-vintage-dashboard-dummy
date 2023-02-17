import React from 'react';
import HeaderPrimary from '../../common/headerPrimary';
import { AiFillStar } from "react-icons/ai";
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";

import style from './style.module.scss';

function DealershipDetails() {
  return (
    <div className={style.dealershipDetails}>
		<button> <IoIosArrowBack/> Go back</button>
      <HeaderPrimary
        title="Dealership Details"
        subTitle="Please find all the necessary details"
      />

      <div className={style.motors}>
        <div className={style.motors_head}>
          <div className={style.motors_heading}>
            <h3>Neel Motors <span> - C23N1JFC1OO19N</span> </h3>
			<p><AiFillStar style={{color:"#FFDF00"}} /> 4.2<span>(50 Reviews)</span> </p>
		  </div>
		  <div className={style.motors_lists}>
           <Row>
			<Col lg={4} className={style.motors_list} >
				<img src='/images/dealership-icon1.svg' />
			   <h6>35 <br/> <span>Active listing</span></h6>
			</Col>
			<Col lg={4} className={style.motors_list}>
			<img src='/images/dealership-icon1.svg' />
			   <h6>35 <br/> <span>Active listing</span></h6>
			</Col>
			<Col lg={4} className={style.motors_list}>
			<img src='/images/dealership-icon1.svg' />
			   <h6>35 <br/> <span>Active listing</span></h6>
			</Col>
		   </Row>
		  </div>
		</div>

		<Row className={style.motors_cards} >
			<Col lg={5} className={style.motors_card}>
			<h6>Address</h6>
			<p>
			No F 29/2, Phase 2, Okhla Industrial Area, Okhla Industrial Area, New Delhi -110020
			</p>
			</Col>
			<Col lg={5} className={style.motors_card} >
			<h6>Address</h6>
			<p>
			No F 29/2, Phase 2, Okhla Industrial Area, Okhla Industrial Area, New Delhi -110020
			</p>
			</Col>
		</Row>
      </div>
    </div>
  );
}

export default DealershipDetails;
