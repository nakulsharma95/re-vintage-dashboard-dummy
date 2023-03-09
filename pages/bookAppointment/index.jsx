import React from 'react';
import BookAppoinmentForm from '~/components/bookAppoinment/bookApoinmentForm';
// import CongratulationCard from '../../components/biddingPortal/congratulationCard';
import Breadcrumb from '../../components/common/breadcrumbPrimary';

import style from "./style.module.scss"

function BookAppoinment(props) {
  return (
    <div>
      <Breadcrumb title="Evaluation" addmoretitle="Book Appoinment" />
	  <h4 className={style.bookAppoinmentTitle} >Book Appoinment</h4>
	  <p className={style.bookAppoinmentText}>Now book appointment and inspect your <br/> motorcycle for the exact value</p>
	  <BookAppoinmentForm/>
      {/* <CongratulationCard
        icon="/images/greenTick.png"
        title="Congratulations!!"
		text1="We are pleased to inform you that you've won the bidding for the
		product"
		textYellow="Classic 350 - DL 6T xxxxx."
		text2=" Classic 350 - DL 6T AC 7314 will be appear in your marketplace within
		24 hours."
      /> */}
     
    </div>
  );
}

export default BookAppoinment;
