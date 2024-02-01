// 단기예보 : 강수확률과 내일 날씨들

import getDateTime from './dateTime';

let {baseDate: tomorrowDate, baseTime: tomorrowTime} = getDateTime(1);
// console.log(tomorrowDate);

export default function applyVilageFcst(weatherObj) {
  const forecastData = [];
  for (let i = 0; i < 809; i++) {
    if (
      weatherObj.response.body.items.item[i].fcstDate === tomorrowDate &&
      weatherObj.response.body.items.item[i].category === 'TMP' &&
      (weatherObj.response.body.items.item[i].fcstTime === '0900' ||
        weatherObj.response.body.items.item[i].fcstTime === '1300' ||
        weatherObj.response.body.items.item[i].fcstTime === '1900')
    )
      forecastData.push(weatherObj.response.body.items.item[i].fcstValue);
  }

  // console.log(forecastData);

  // const T1H = forecastData[4].fcstValue; // 현재 기온
  // const RN1 =
  //   forecastData[2].fcstValue === '강수없음' ? 0 : forecastData[2].fcstValue; // 1시간 강수량

  return forecastData;
}
