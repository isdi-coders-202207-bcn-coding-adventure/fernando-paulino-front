const targetYear = 2022;
const targetMonth = 8;
const targetDay = 15;
const targetHour = 18;
const targetMinutes = 0;
const targetSeconds = 0;

const targetDateInMiliseconds = new Date(
  targetYear,
  targetMonth,
  targetDay,
  targetHour,
  targetMinutes,
  targetSeconds
).getTime();

export default targetDateInMiliseconds;
