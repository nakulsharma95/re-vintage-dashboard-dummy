import React from 'react'
import BikeInspection from '../../../components/biddingPortal/bikeInspection';
import MotorcycleAccordian from '../../../components/escalation/motorCycleAccordian';
import HeaderPrimary from '../../../components/common/headerPrimary'
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';


// escalation/procuredMotorcycle
function ProcuredMotorcycle() {
  return (
	<div>
		<HeaderPrimary
        headerClass="mb-2"
        title="Procured Motorcycle"
      >
      </HeaderPrimary>
	  <hr/>
	  <CompleteBikeDetail
        isEvalBtnVisible={false}
        isCallerBtnVisible
        isEnquiryNumVisible
      />
     <MotorcycleAccordian />
	  <BikeInspection/>
	</div>
  )
}

export default ProcuredMotorcycle