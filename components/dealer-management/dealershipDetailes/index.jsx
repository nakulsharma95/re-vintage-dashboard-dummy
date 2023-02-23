import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.scss';
import HeaderPrimary from '../../common/headerPrimary';
import OutlineDropdown from '../../common/buttons/OutlineDropdown';

function DealershipDetails() {
  return (
    <div className={style.dealershipDetails}>
      <button type="button">
        <Link href="/dealer-management">
          <IoIosArrowBack /> Go back
        </Link>
      </button>
      <HeaderPrimary
        title="Dealership Details"
        subTitle="Please find all the necessary details"
      >
        <div className='status-circle success mt-3'></div>
        <p className={style.dealership_status}>Status Active</p>
        <OutlineDropdown
          dropdownTitle="Actions"
          dropdownMenuTitle="Blacklist Dealer"
        />
      </HeaderPrimary>

      <div className={style.motors}>
        <div className={style.motors_head}>
          <div className={style.motors_heading}>
            <h3>
              Neel Motors <span> - C23N1JFC1OO19N</span>
            </h3>
            <p>
              <AiFillStar style={{ color: '#FFDF00' }} /> 4.2
              <span>(50 Reviews)</span>
            </p>
          </div>
          <div className={style.motors_lists}>
            <div className={style.motors_list}>
              <Image
                src="/images/dealership-icon1.svg"
                width="28"
                height="17"
                alt=""
              />
              <div className={style.listItemContent}>
                <h6>35</h6>
                <p>Active listing</p>
              </div>
            </div>
            <div className={style.motors_list}>
              <Image
                src="/images/dealership-icon1.svg"
                width="28"
                height="17"
                alt=""
              />
              <div className={style.listItemContent}>
                <h6>10</h6>
                <p>Refurbishment</p>
              </div>
            </div>
            <div className={style.motors_list}>
              <Image
                src="/images/dealership-icon1.svg"
                width="28"
                height="17"
                alt=""
              />
              <div className={style.listItemContent}>
                <h6>96</h6>
                <p>Branches</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.motors_cards}>
          <div className={style.motors_card}>
            <h6>
              Address <span>View in map</span>
            </h6>
            <p>
              No F 29/2, Phase 2, Okhla Industrial Area, Okhla Industrial Area,
              New Delhi -110020
            </p>
          </div>
          <div className={style.motors_card}>
            <h6>Contact Dealer</h6>
            <p>
              +91 89564 23658 <br /> <span>Mon - Sat, 9:00 AM - 8:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealershipDetails;
