import React  from 'react';
import HeaderPrimary from '../../common/headerPrimary';
import { AiFillStar } from "react-icons/ai";
import { Row, Col } from 'react-bootstrap';
import { IoIosArrowBack } from "react-icons/io";

import style from './style.module.scss';
import Link from 'next/link';
import OutlineDropdown from '../../common/buttons/OutlineDropdown';

function DealershipDetails() {
  return (
    <div className={style.dealershipDetails}>
		<button> <Link href="/dealer-management"><IoIosArrowBack/> Go back</Link> </button>
      <HeaderPrimary
        title="Dealership Details"
        subTitle="Please find all the necessary details"
      >
		<p className={style.dealership_status}>Status Active</p>
		<OutlineDropdown dropdownTitle="Actions" dropdownMenuTitle="Blacklist Dealer" />
	  </HeaderPrimary>

      <div className={style.motors}>
        <div className={style.motors_head}>
          <div className={style.motors_heading}>
            <h3>Neel Motors <span> - C23N1JFC1OO19N</span> </h3>
			<p><AiFillStar style={{color:"#FFDF00"}} /> 4.2<span>(50 Reviews)</span> </p>
		  </div>
		  <div className={style.motors_lists}>
           <Row>
			<Col lg={4} className={style.motors_list}>
				<img src='/images/dealership-icon1.svg' />
			   <h6>35 <br/> <span>Active listing</span></h6>
			</Col>
			<Col lg={4} className={style.motors_list}>
			<img src='/images/dealership-icon1.svg' />
			   <h6>10 <br/> <span>Refurbishment</span></h6>
			</Col>
			<Col lg={4} className={style.motors_list}>
			<img src='/images/dealership-icon1.svg' />
			   <h6>06 <br/> <span>Branches</span></h6>
			</Col>
		   </Row>
		  </div>
		</div>

		<Row className={style.motors_cards} >
			<Col xxl={5} xl={5} lg={5} className={style.motors_card}>
			<h6>Address <span>View in map</span> </h6>
			<p>
			No F 29/2, Phase 2, Okhla Industrial Area, Okhla Industrial Area, New Delhi -110020
			</p>
			</Col>
			<Col xxl={5} xl={5} lg={5} className={style.motors_card} >
			<h6>Contact Dealer</h6>
			<p>
			+91 89564 23658 <br/> <span>Mon - Sat, 9:00 AM - 8:00 PM</span>
			</p>
			</Col>
		</Row>
      </div>
    </div>
  );
}

export default DealershipDetails;
