export default function getDateTime(next, isZeroMinute) {
  const now = new Date();

  const year = now.getFullYear();

  let month = now.getMonth() + 1;
  let date = next ? now.getDate() + next : now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 32) {
    if (hours === 0) {
      const yesterday = new Date(year, month, date - 1);
      month = yesterday.getMonth() + 1;
      date = yesterday.getDate();
      hours = 23;
      minutes = '00';
    } else {
      hours--;
    }
  }

  return {
    baseDate: year + `${month}`.padStart(2, '0') + `${date}`.padStart(2, '0'),
    baseTime: isZeroMinute
      ? `${hours}`.padStart(2, '0') + '00'
      : `${hours}`.padStart(2, '0') + '30',
    // basetime : 초단기실황일 경우 00분 || 초단기예보일 경우 30분
  };
}
