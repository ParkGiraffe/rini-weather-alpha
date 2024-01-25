export default function getDateTime() {
  const now = new Date();

  const year = now.getFullYear();

  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (minutes < 30) {
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
    baseTime: `${hours}`.padStart(2, '0') + '00',
  };
}
