import Breadcrumb from 'common/breadCrumb'
import DealBikeCard from 'common/dealCloserBikeCard'
import Filters from 'common/filters'
import React from 'react'

const DealClosure = () => {
  return (
	<>
	  <Breadcrumb />
	  <Filters title="Deal Closure" subTitle="Please fill all the necessary details"/>
	  <div className='bottom-white-border'></div>
	  <DealBikeCard />
	</>
  )
}

export default DealClosure
