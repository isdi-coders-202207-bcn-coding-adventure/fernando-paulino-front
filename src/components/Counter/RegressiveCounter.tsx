import RegressiveCounterStyled from "./RegressiveCounterStyled";

const RegressiveCounter = (): JSX.Element => {
  return (
    <RegressiveCounterStyled>
      <div className="time-container">
        <div className="time-container__time-unit">02</div>
        <span className="time-container__unit">days</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">20</div>
        <span className="time-container__unit">hours</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">34</div>
        <span className="time-container__unit">minutes</span>
      </div>
      <div className="time-container">
        <div className="time-container__time-unit">09</div>
        <span className="time-container__unit">seconds</span>
      </div>
    </RegressiveCounterStyled>
  );
};

export default RegressiveCounter;
