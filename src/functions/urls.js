import getGrid from './grid';
import getDateTime from './dateTime';
import {FORECAST_APP_API_KEY} from '@env';

const getUrls = () => {
  const apiKey = FORECAST_APP_API_KEY;
  // console.log(apiKey);

  const {x, y} = getGrid('toXY', 37.715133, 127.0016985);
  const {baseTime, baseDate} = getDateTime();

  const shortTermParams = {
    serviceKey: apiKey,
    pageNo: '1',
    numOfRows: '60',
    dataType: 'JSON',
    base_date: baseDate,
    base_time: baseTime,
    nx: x, //경도
    ny: y, //위도
  };
  const queryShortTerm = new URLSearchParams(shortTermParams)
    .toString()
    .split('%25')
    .join('%');

  const ultraSrtFcstURL =
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?` +
    queryShortTerm; // 초단기예보
  const ultraSrtNcstURL =
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?` +
    queryShortTerm; // 초단기실황조회
  const VilageFcstURL =
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?' +
    queryShortTerm; // 단기예보

  return {ultraSrtFcstURL, ultraSrtNcstURL, VilageFcstURL};
};

export default getUrls;
