import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Container from '../components/Container';
import WideContainer from '../components/WideContainer';
import Blank from '../components/Blank';
import Temperature from '../components/Temperature';
import Precipitation from '../components/Precipitation';
import Weathers from '../components/Weathers';
import TopTexts from '../components/TopTexts';
import useHttp from '../hooks/useHttp';
import applyUltraSrtFcst from '../functions/applyUltraSrtFcst';
import getUrls from '../functions/urls';
import Geolocation from 'react-native-geolocation-service';
import applyReverseGeo from '../functions/applyReverseGeo';

const MainPage = () => {
  const [curWeather, setCurWeather] = useState({});
  const [locality, setLocality] = useState('');
  const {isLoading1, error1, sendRequest: fetchWeather} = useHttp();
  const {isLoading2, error2, sendRequest: fetchLocation} = useHttp();
  let ultraSrtFcstURL, ultraSrtNcstURL, VilageFcstURL, ReverseGeoURL;

  useEffect(() => {
    // 초단기예보 : 현재기온, 1시간 강수량
    const ultraSrtFcst = async () => {
      const {T1H, RN1} = await fetchWeather(
        {url: ultraSrtFcstURL},
        applyUltraSrtFcst,
      );
      setCurWeather({
        temperature: T1H,
        rainfall: RN1,
      });
    };

    const ReverseGeoCode = async () => {
      const {city, locality} = await fetchLocation(
        {url: ReverseGeoURL},
        applyReverseGeo,
      );
      setLocality(locality);
    };

    const getGeoWeather = async () => {
      if (Platform.OS === 'ios') {
        await Geolocation.requestAuthorization('always');
      }
      if (Platform.OS === 'android') {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
      }

      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          const urls = getUrls(latitude, longitude);
          ultraSrtFcstURL = urls.ultraSrtFcstURL;
          ultraSrtNcstURL = urls.ultraSrtNcstURL;
          VilageFcstURL = urls.VilageFcstURL;
          ReverseGeoURL = urls.ReverseGeoURL;
          ultraSrtFcst();
          ReverseGeoCode();
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };

    getGeoWeather();
  }, [fetchWeather, fetchLocation]);

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
      <TopTexts city={locality} />
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
          rainAmount={`시간당 ${curWeather.rainfall}mm`}
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
