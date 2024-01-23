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

const apiKey = FORECAST_APP_API_KEY;
// console.log(apiKey);

const forecastBaseURL =
  'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';

const nowTime = new Date();
console.log(nowTime);

const shortTermParams = {
  serviceKey: apiKey,
  pageNo: '1',
  numOfRows: '10',
  dataType: 'JSON',
  base_date:
    nowTime.getFullYear() +
    `${nowTime.getMonth() + 1}`.padStart(2, '0') +
    nowTime.getDate().toString().padStart(2, '0'),
  base_time: '2000',
    // `${nowTime.getHours()}`.padStart(2, '0') +
    // `${nowTime.getMinutes()}`.padStart(2, '0'),
  nx: '34', // 위도
  ny: '127', // 경도
};
const queryShortTerm = new URLSearchParams(shortTermParams)
  .toString()
  .split('%25')
  .join('%');
// console.log(queryShortTerm)
const shortTermForecastURL = `${forecastBaseURL}${queryShortTerm}`;
console.log(shortTermForecastURL);

const MainPage = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('seoul');

  const {isLoading, error, sendRequest: fetchWeather} = useHttp();

  useEffect(() => {
    const transformweather = weatherObj => {
      const temperature = weatherObj.main.temp;

      setWeather({
        temperature: temperature,
      });
    };

    fetchWeather({url: shortTermForecastURL}, transformweather);
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
          figure={`${weather.temperature}도`}
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
