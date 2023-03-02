import React from 'react';
import BikeInspection from '../../../components/biddingPortal/bikeInspection';
import MotorcycleAccordian from '../../../components/escalation/motorCycleAccordian';
import HeaderPrimary from '../../../components/common/headerPrimary';
import BackButton from '../../../components/common/buttons/BackButton';
import BikeSlider from '../../../components/common/thumbnailSlider';
import MotorcycleDetail from '../../../components/procurements/motorcycleDetail';

import style from './style.module.scss';

function ProcuredMotorcycle() {
  const completeData = [
    {
      bikeCode: 'FB29FH9219HR1',
      bikeName: 'HUNTER 350',
      bikeNumber: '- DL6TAL7314',
      chasisNumber: '- B28EG192BR19',
      priceTitle: 'Evaluation Price',
      evaluationPrice: '1,19,300',
      priceTitle2: 'Dealer Price',
      dealerPrice: '1,29,300',
    },
  ];
  return (
    <div>
      <BackButton backLink="/escalation" title="Go Back" />
      <HeaderPrimary headerClass="mb-2" title="Procured Motorcycle">
        <p className={style.procuredStatus}>
          <span className={`status-circle warning ${style.space}`} /> Status:
          <span className={style.textHighlight}> Content Upload</span>
        </p>
      </HeaderPrimary>
      <hr />
      <div className={style.procuredMotorTopcard}>
        <div className={style.imgBox}>
          <BikeSlider isSlider />
        </div>
        {completeData.map((item) => (
          <div className={style.procuredMotorDetail}>
            <MotorcycleDetail
              bikeInfo
              detailLocation
              dealerDetails
              dealerName="Neel Motors, Lajpat Nagar, Delhi"
              bikeLocation="Karol Bagh, Delhi"
              bikeCode={item.bikeCode}
              bikeName={item.bikeName}
              chasisNumber={item.chasisNumber}
              bikeNumber={item.bikeNumber}
              priceTitle={item.priceTitle}
              evaluationPrice={item.evaluationPrice}
              priceTitle2={item.priceTitle2}
              dealerPrice={item.dealerPrice}
            />
          </div>
        ))}
      </div>
      <MotorcycleAccordian />
      <div className="mt-5">
        <BikeInspection noOutlineBtn />
      </div>
    </div>
  );
}

export default ProcuredMotorcycle;
