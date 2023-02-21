import React from 'react';
import BikeInspection from '../../../components/biddingPortal/bikeInspection';
import MotorcycleAccordian from '../../../components/escalation/motorCycleAccordian';
import HeaderPrimary from '../../../components/common/headerPrimary';
import CompleteBikeDetail from '../../../components/procurements/completeEvalutationCard';
import SalesJourney from '../../../components/escalation/salesJourney';
import BackButton from '../../../components/common/buttons/BackButton';

import style from "./style.module.scss";

// escalation/procuredMotorcycle
function ProcuredMotorcycle() {
  return (
    <div>
      <BackButton backLink="/escalation" title="Go Back" />
      <HeaderPrimary
        headerClass="mb-2"
        title="Procured Motorcycle"
      >
        <p className={style.procuredStatus}>Status:<span>Content Upload</span> </p>
      </HeaderPrimary>
      <hr />
      <CompleteBikeDetail
        isEvalBtnVisible={false}
        isCallerBtnVisible
        isEnquiryNumVisible
      />
      <SalesJourney/>
      <MotorcycleAccordian />
      <div className="mt-5">
        <BikeInspection />
      </div>
    </div>
  );
}

export default ProcuredMotorcycle;
