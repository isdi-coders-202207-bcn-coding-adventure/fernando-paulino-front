import { useEffect, useState } from "react";
import targetDateInMiliseconds from "../../utils/targetDate";
import RegressiveCounterStyled from "./RegressiveCounterStyled";

const RegressiveCounter = (): JSX.Element => {
  const currentDateinMiliseconds = new Date().getTime();

  const initialCounterState = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const [regressiveCounter, setRegressiveCounter] =
    useState(initialCounterState);

  const calculateTimeLeft = () => {
    const timeLeft = targetDateInMiliseconds - currentDateinMiliseconds;

    const countdown = {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };

    setRegressiveCounter(countdown);
  };

  useEffect(() => {
    setTimeout(() => calculateTimeLeft(), 1000);
  });

  return (
    <RegressiveCounterStyled>
      <div className="time-container">
        <div className="time-container__time-unit">
          {regressiveCounter.days}
        </div>
        <span className="time-container__unit">days</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">
          {regressiveCounter.hours}
        </div>
        <span className="time-container__unit">hours</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">
          {regressiveCounter.minutes}
        </div>
        <span className="time-container__unit">minutes</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">
          {regressiveCounter.seconds}
        </div>
        <span className="time-container__unit">seconds</span>
      </div>
    </RegressiveCounterStyled>
  );
};

export default RegressiveCounter;
