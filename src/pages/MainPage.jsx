import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';
import WideContainer from '../components/WideContainer';
import Blank from '../components/Blank';
import Temperature from '../components/Temperature';
import Precipitation from '../components/Precipitation';
import Weathers from '../components/Weathers';
import TopTexts from '../components/TopTexts';
import useHttp from '../hooks/useHttp';
import {FORECAST_APP_API_KEY} from '@env';
import getGrid from '../functions/grid';
import getDateTime from '../functions/dateTime';

const apiKey = FORECAST_APP_API_KEY;
// console.log(apiKey);

const forecastBaseURL =
  // `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`; // 초단기예보
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?`; // 초단기실황조회
// 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?'; // 단기예보

const {x, y} = getGrid('toXY', 37.715133, 127.0016985);
const {baseTime, baseDate} = getDateTime();

const shortTermParams = {
  serviceKey: apiKey,
  pageNo: '1',
  numOfRows: '8',
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
// console.log(queryShortTerm)
const shortTermForecastURL = `${forecastBaseURL}${queryShortTerm}`;
console.log(shortTermForecastURL);

const MainPage = () => {
  const [curWeather, setCurWeather] = useState({});
  const [city, setCity] = useState('seoul');

  const {isLoading, error, sendRequest: fetchWeather} = useHttp();

  useEffect(() => {
    const applyCurrentWeather = weatherObj => {
      const forecastData = weatherObj.response.body.items.item;
      const TMP = forecastData[0].fcstValue;

      setCurWeather({
        temperature: TMP,
      });
    };
    fetchWeather({url: shortTermForecastURL}, applyCurrentWeather);
  }, [fetchWeather]);

  const weathersProps = {
    desc: {
      morning: `여름의 무더위`,
      afternoon: '여름의 무더위',
      evening: '덥지만 반팔이면 ok',
    },
    figure: {
      morning: `30도`,
      afternoon: '31도',
      evening: '25도',
    },
  };

  return (
    <ScrollView style={styles.main}>
      <TopTexts city={'city'} />
      <WideContainer>
        <Temperature
          title={'기온'}
          desc={'여름의 무더위'}
          figure={`${curWeather.temperature}도`}
        />
      </WideContainer>
      <Blank />

      <WideContainer>
        <Weathers desc={weathersProps.desc} figure={weathersProps.figure} />
      </WideContainer>
      <Blank />

      <View style={styles.containers}>
        <Container title={'자외선'} desc={'낮음'} figure={`자외선 지수 : 1`} />
        <Container title={'미세먼지'} desc={'매우 나쁨'} figure={`76㎍/㎥`} />
      </View>
      <Blank />

      <WideContainer>
        <Precipitation
          title={'강수량'}
          rainDesc={'햇빛 쨍쨍'}
          rainAmount={`시간당 0mm`}
          probDesc={'비가 내릴 확률'}
          probFigure={`없음 : 0%`}
        />
      </WideContainer>
      <Blank />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor: 'yellow',
    paddingHorizontal: '5%',
  },
  containers: {
    width: '100%',
    // backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainPage;
