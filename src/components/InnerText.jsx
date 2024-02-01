import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InnerText = props => {
  const {title, img, desc, figure} = props;

  return (
    <View style={styles.main}>
      <View style={styles.topTextContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.figure}>{figure}도</Text>
      </View>
      <View style={styles.imgContainer}>{img}</View>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'cyan',
    height: 160,
    width: '20%',
    borderRadius: 15,
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 10,
  },
  imgContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
    marginBottom: 7,
  },
  topTextContainer: {
    alignItems: 'center',
    marginBottom: 7,
  },
  title: {
    fontSize: 15,
  },
  desc: {
    textAlign: 'center',
    fontSize: 11,
    // marginBottom: 5,
  },
  figure: {
    fontSize: 11,
  },
});

export default InnerText;
