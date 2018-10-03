// @flow

const addLeadZero = (time: number, length: number = 2): string =>
  (time < 10 ? `0${time}` : time.toString()).substring(0, length);

export const formatTimeString = (
  milliseconds: number,
  withMiliseconds: boolean = true
): string => {
  const hours = Math.floor(milliseconds / (60 * 60 * 1000));
  let time = milliseconds % (60 * 60 * 1000);
  const minutes = addLeadZero(Math.floor(time / (60 * 1000)));
  time = time % (60 * 1000);
  const seconds = addLeadZero(Math.floor(time / 1000));
  const ms = addLeadZero(Math.floor(time % 1000));
  const timeString = `${
    hours > 0 ? `${addLeadZero(hours, Infinity)}:` : ''
  }${minutes}:${seconds}`;
  return withMiliseconds ? `${timeString},${ms}` : timeString;
};
