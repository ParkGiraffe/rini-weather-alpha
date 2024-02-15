import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Img = props => {
  const {img} = props;
  return (
    <View style={styles.main}>
      <Image source={img} style={styles.img} />
      {/* <Image src="../assets/emoticon/tmp1.png" style={styles.img} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // height: 80,
    // width: 80,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignContent: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'blue',
  },
});

export default Img;
