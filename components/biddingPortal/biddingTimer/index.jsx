import React, { useState, useEffect } from 'react';
import { timerHelper } from '~/utils/helpers';
import { useGetDateQuery } from '~/redux/api/endpoints/biddingTimer';
import styles from './style.module.scss';

export default function BiddingTimer(props) {
  const { data, isSuccess } = useGetDateQuery();

  const [timer, setTimer] = useState({ text: '', time: '' });

  const day = 60 * 60 * 24 * 1000;

  const remainingTime = (startDate, endDate) => {
    if (endDate < 0)
      return { time: endDate + day, text: props.biddingNotStartedText };
    return startDate > 0
      ? { time: startDate, text: props.biddingNotStartedText }
      : { time: endDate, text: props.biddingStartedText };
  };

  let currentDate = new Date(data?.data);
  const biddingStartingTime = new Date(data?.data);
  const biddingEndTime = new Date(data?.data);

  function runFunction() {
    console.log(`current date: ${currentDate}`, data);

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
    if (isSuccess) {
      setInterval(runFunction, 1000);
    }
  }, [isSuccess]);
  return (
    <div className={styles.biddingTimer}>
      {timer.text}
      <span>{timer.time}</span>
    </div>
  );
}
