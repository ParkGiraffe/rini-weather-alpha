import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../componets/Container';
import WideContainer from '../componets/WideContainer';
import Blank from '../componets/Blank';
import Temperature from '../componets/Temperature';
import Precipitation from '../componets/Precipitation';
import Weathers from '../componets/Weathers';

const MainPage = () => {
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
    <View style={styles.main}>
      <WideContainer>
        <Temperature title={'기온'} desc={'여름의 무더위'} figure={`30도`} />
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

    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    padding: '5%',
  },
  containers: {
    width: '100%',
    // backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default MainPage;
