import React from 'react';

import style from './style.module.scss'

function ProcurementDetails() {
  return (
	<div className={style.procurementDetails}>
		<h5>Escalation Issue</h5>
		<p>Issue mentioned by CRE</p>
		
		<h6>Remark</h6>
		<div className='position-relative'>
		<div className={style.remark_text}>
           <p>Remark by Supervisor</p>
		</div>
		<button className={style.remark_btn} >SUBMIT</button>
		</div>
		
		</div>
  )
}

export default ProcurementDetails