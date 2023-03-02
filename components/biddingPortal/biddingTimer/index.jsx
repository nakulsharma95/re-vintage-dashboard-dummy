import React, { useState, useEffect } from 'react';
import { timerHelper } from '~/utils/helpers';
import { useGetDateQuery } from '~/redux/api/endpoints/biddingTimer';
import styles from './style.module.scss';

export default function BiddingTimer(props) {
  const biddingNotStartedText = 'bidding will Active in';
  const biddingStartedText = 'bidding is Active Now!';
  const { data, isSuccess } = useGetDateQuery();

  const [timer, setTimer] = useState({ text: '', time: '' });

  const day = 60 * 60 * 24 * 1000;

  const remainingTime = (startDate, endDate) => {
    if (endDate < 0)
      return { time: startDate + day, text: biddingNotStartedText };
    return startDate > 0
      ? { time: startDate, text: biddingNotStartedText }
      : { time: endDate, text: biddingStartedText };
  };

  let currentDate = new Date(data?.data);
  const biddingStartingTime = new Date(data?.data);
  const biddingEndTime = new Date(data?.data);

  function runFunction() {
    const biddingActualStartTime =
      biddingStartingTime.setHours(props.biddingStartTime, 0, 0, 0) -
      currentDate;
    const biddingActualEndTime =
      biddingEndTime.setHours(props.biddingEndTime, 0, 0, 0) - currentDate;

    const biddingStatus = remainingTime(
      biddingActualStartTime,
      biddingActualEndTime
    );
    currentDate = Number(currentDate) + 1000;

    const countDownTime = biddingStatus.time;

    setTimer({
      text: biddingStatus.text,
      time: timerHelper(countDownTime),
    });
  }
  useEffect(() => {
    let biddingTimer;
    if (isSuccess) {
      biddingTimer = setInterval(runFunction, 1000);
    }

    return () => {
      clearInterval(biddingTimer);
    };
  }, [isSuccess]);
  return (
    <div className={styles.biddingTimer}>
      {timer.text}
      <span>{timer.time}</span>
    </div>
  );
}
