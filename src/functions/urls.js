import getGrid from './grid';
import getDateTime from './dateTime';
import {FORECAST_APP_API_KEY, DECODE_LOCATION_API_KEY} from '@env';

const getUrls = (lat, lon) => {
  const apiKey = FORECAST_APP_API_KEY;
  // console.log(apiKey);

  const {x, y} = getGrid('toXY', lat, lon);
  const {baseTime, baseDate} = getDateTime();

  // 초단기실황
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

  // 단기예보
  const shortTermParams2 = {
    serviceKey: apiKey,
    pageNo: '1',
    numOfRows: '809',
    dataType: 'JSON',
    base_date: baseDate,
    base_time: '0500',
    nx: x, //경도
    ny: y, //위도
  };
  const queryShortTerm2 = new URLSearchParams(shortTermParams2)
    .toString()
    .split('%25')
    .join('%');

  const UltraSrtFcstURL =
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?` +
    queryShortTerm; // 초단기예보
  const UltraSrtNcstURL =
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?` +
    queryShortTerm; // 초단기실황조회
  const VilageFcstURL =
    'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?' +
    queryShortTerm2; // 단기예보

  // 주소 변환 API 주소
  const shortTermParams3 = {
    key: DECODE_LOCATION_API_KEY,
    latitude: lat,
    longitude: lon,
    localityLanguage: 'ko',
  };
  const queryShortTerm3 = new URLSearchParams(shortTermParams3).toString();

  const ReverseGeoURL =
    'https://api.bigdatacloud.net/data/reverse-geocode?' + queryShortTerm3;

  return {UltraSrtFcstURL, UltraSrtNcstURL, VilageFcstURL, ReverseGeoURL};
};

export default getUrls;
