import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Container = props => {
  const {title, img, desc, figure} = props;

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imgContainer}>{img}</View>
      <View style={styles.botTextContainer}>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.figure}>{figure}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d9d9d9',
    height: 160,
    width: 160,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  imgContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
  },
  botTextContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  desc: {
    fontSize: 15,
    marginBottom: 5,
  },
  figure: {
    fontSize: 12,
  },
});

export default Container;
