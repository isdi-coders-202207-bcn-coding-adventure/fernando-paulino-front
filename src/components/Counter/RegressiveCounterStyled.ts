import styled from "styled-components";

const RegressiveCounterStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  flex-wrap: wrap;

  .time-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    border-radius: 20px;

    &__time-unit {
      display: flex;
      flex-direction: column;
      height: 150px;
      width: 150px;
      justify-content: center;
      align-items: center;
      font-size: 60px;
      background-color: #f7c600;
      color: #243342;
      border-radius: 20px;
      margin: 0 15px;
    }

    &__unit {
      color: white;
      font-size: 30px;
    }
  }
`;

export default RegressiveCounterStyled;
