import React, { useState, useEffect } from 'react';
import { timerHelper } from '../../../utils/helpers';
import { useGetDateQuery } from '../../../redux/api/endpoints/biddingTimer';
import styles from './style.module.scss';

export default function BiddingTimer(props) {
  const [isRefetchQuery, setIsRefetchQuery] = useState(false);
  const [timer, setTimer] = useState({ text: '', time: '' });
  const { data, isSuccess } = useGetDateQuery({ isRefetchQuery });

  const biddingNotStartedText = 'Bidding will Active in';
  const biddingStartedText = 'Bidding is Active Now!';
  let currentDate = new Date(data?.data);
  const biddingStartingTime = new Date(data?.data);
  const biddingEndTime = new Date(data?.data);
  const day = 60 * 60 * 24 * 1000;

  const returnBiddingStatus = (startDate, endDate) => {
    if (endDate < 0)
      return { time: startDate + day, text: biddingNotStartedText };
    return startDate > 0
      ? { time: startDate, text: biddingNotStartedText }
      : { time: endDate, text: biddingStartedText };
  };

  function runFunction() {
    const biddingActualStartTime =
      biddingStartingTime.setHours(props.biddingStartTime, 0, 0, 0) -
      currentDate;
    const biddingActualEndTime =
      biddingEndTime.setHours(props.biddingEndTime, 0, 0, 0) - currentDate;

    const biddingStatus = returnBiddingStatus(
      biddingActualStartTime,
      biddingActualEndTime
    );
    currentDate = Number(currentDate) + 1000;

    setTimer({
      text: biddingStatus.text,
      time: timerHelper(biddingStatus.time),
    });
  }
  useEffect(() => {
    let biddingTimer;
    if (isSuccess) {
      biddingTimer = setInterval(runFunction, 1000);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (isSuccess) {
          setIsRefetchQuery(!isRefetchQuery);
        }
      }
    });

    return () => {
      clearInterval(biddingTimer);
      document.removeEventListener('visibilitychange', () => {});
    };
  }, [data]);

  return (
    <div className={styles.biddingTimer}>
      {timer.text}
      <span>{timer.time}</span>
    </div>
  );
}
