import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Precipitation = props => {
  const {title, img, rainDesc, rainAmount, probDesc, probFigure} = props;

  /*
  rainDesc : 강수량 텍스트
  rainAmount : 강수량 수치
  probDesc : 비가 내릴 확률
  probFigure : 확률 수치
  */

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.imgContainer}>{img}</View>
      <View style={styles.bottomLine}>
        <View style={styles.botTextContainer}>
          <Text style={styles.desc}>{rainDesc}</Text>
          <Text style={styles.figure}>{rainAmount}</Text>
        </View>
        <View style={styles.botTextContainer}>
          <Text style={styles.desc}>{probDesc}</Text>
          <Text style={styles.figure}>{probFigure}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#d9d9d9',
    height: 160,
    // width: 160,
    // borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  imgContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
  },
  bottomLine: {
    width : '75%',
    flexDirection: 'row',
    // backgroundColor: 'white',
    justifyContent:'space-between'
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
export default Precipitation;
