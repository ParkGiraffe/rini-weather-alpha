import React from 'react';
import {StyleSheet, View} from 'react-native';

const WideContainer = props => {
  return <View style={styles.main}>{props.children}</View>;
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#d9d9d9',
    height: 160,
    width: '100%',
    borderRadius: 15,
    // paddingVertical: 10,
  },
});

export default WideContainer;
