import React from 'react';
import BookAppoinmentForm from '../../components/bookAppoinment/bookApoinmentForm';
import Breadcrumb from '../../components/common/breadcrumbPrimary';

import style from './style.module.scss';

function BookAppoinment() {
  return (
    <div>
      <Breadcrumb title="Evaluation" addmoretitle="Book Appoinment" />
      <h4 className={style.bookAppoinmentTitle}>Book Appoinment</h4>
      <p className={style.bookAppoinmentText}>
        Now book appointment and inspect your <br /> motorcycle for the exact
        value
      </p>
      <BookAppoinmentForm />
    </div>
  );
}

export default BookAppoinment;
