import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../componets/Container';
import WideConater from '../componets/WideContainer';
import Blank from '../componets/blank';

const MainPage = () => {
  return (
    <View style={styles.main}>
      <WideConater>
        <Text>hi</Text>
      </WideConater>
      <Blank />
      <View style={styles.containers}>
        <Container title={'자외선'} desc={'낮음'} figure={`자외선 지수 : 1`} />
        <Container title={'미세먼지'} desc={'매우 나쁨'} figure={`76㎍/㎥`} />
      </View>
      <Blank />
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
