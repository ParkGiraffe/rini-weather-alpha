import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Img from './Img';

const Temperature = props => {
  const {title, img, desc, figure} = props;

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      {/* <View style={styles.imgContainer}>{img}</View> */}
      <View style={styles.botTextContainer}>
        <View>
          <Text style={styles.figure}>{figure}</Text>
        </View>
      <Img />
        <View>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d9d9d9',
    height: 160,
    // width: 160,
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
    // backgroundColor: 'blue',
    alignItems: 'center',
    // flexDirection: 'row'
    width: '45%',
    flexDirection: 'row',
    // backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  desc: {
    fontSize: 15,
    // marginBottom: 5,
  },
  figure: {
    fontSize: 15,
  },
});
export default Temperature;
