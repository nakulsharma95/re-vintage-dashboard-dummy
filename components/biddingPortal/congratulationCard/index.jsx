import Image from 'next/image';
import React from 'react';

import style from './style.module.scss';

function CongratulationCard(props) {
  return (
    <div className={style.congratulationCard}>
      <div className={style.congratulationCardDetailes}>
        <h3>
          <Image className="me-2" src={props.icon} width={34} height={34} />{' '}
          {props.title}
        </h3>
        <p className={style.cardDetailesText}>
          {props.text1} <span>{props.textYellow} </span>
        </p>
        <p className={style.cardDetailesTextGray}>{props.text2}</p>
      </div>
      <div className={style.congratulationCardSlider}>
        <Image src="/images/bikeImage2.png" width={409} height={251} />
      </div>
    </div>
  );
}

export default CongratulationCard;
