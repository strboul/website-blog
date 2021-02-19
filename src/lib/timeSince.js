/*
 * Adapted from:
 * https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
 */
const timeSince = (date) => {
  let seconds = Math.floor((new Date() - Date.parse(date)) / 1000);
  let interval = seconds / 31536000;
  const makeTimeText = (interval, text) => {
    const intrv = Math.floor(interval);
    return `${intrv} ${intrv !== 1 ? `${text}s` : text} ago`;
  };
  if (interval > 1) return makeTimeText(interval, "year");
  interval = seconds / 2592000;
  if (interval > 1) return makeTimeText(interval, "month");
  interval = seconds / 86400;
  if (interval > 1) return makeTimeText(interval, "day");
  interval = seconds / 3600;
  if (interval > 1) return makeTimeText(interval, "hour");
  interval = seconds / 60;
  if (interval > 1) return makeTimeText(interval, "minute");
  return makeTimeText(interval, "second");
};

export default timeSince;
