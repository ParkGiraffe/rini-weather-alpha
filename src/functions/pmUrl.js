import {FORECAST_APP_API_KEY} from '@env';

// 미세먼지 - 시도별 실시간 측정정보 조회

export default function getPmUrl(city, locality) {
  if (city.length === 4) {
    city = city[0] + city[2];
  } else if (city.length > 5) {
    city = city[0] + city[1];
  }

  const shortTermParams = {
    serviceKey: FORECAST_APP_API_KEY,
    returnType: 'json',
    numOfRows: 100,
    pageNo: 1,
    sidoName: city,
    ver: 1.0,
  };
  // console.log(shortTermParams);

  const queryShortTerm = new URLSearchParams(shortTermParams)
    .toString()
    .split('%25')
    .join('%');

  const PMURL =
    'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?' +
    queryShortTerm;


  return PMURL;
}
