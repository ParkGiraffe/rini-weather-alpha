import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopTexts = props => {
  const {city} = props;

  return (
    <View style={styles.main}>
      <Text style={styles.subText}>지금</Text>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.subText}>날씨는</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'cyan',
    height: 180,
    // width: '20%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  cityText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  subText: {
    // textAlign: 'center',
    fontSize: 25,
    // marginBottom: 5,
  },
});

export default TopTexts;
