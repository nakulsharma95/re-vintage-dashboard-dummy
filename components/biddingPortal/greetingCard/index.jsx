import Image from 'next/image';
import React from 'react';

import style from './style.module.scss';

function GreetingCard(props) {
  return (
    <div className={style.greetingCard}>
      <div className={style.greetingCardDetailes}>
        <h3>
          <Image className="me-2" src={props.icon} width={34} height={34} />{' '}
          {props.title}
        </h3>
        <p className={style.cardDetailesText}>
          {props.text1} <span>{props.textYellow} </span>
        </p>
        <p className={style.cardDetailesTextGray}>{props.text2}</p>
      </div>
      <div className={style.greetingCardSlider}>
        <Image src="/images/bikeImage2.png" width={409} height={251} />
      </div>
    </div>
  );
}

export default GreetingCard;
