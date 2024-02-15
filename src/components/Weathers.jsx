import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import InnerText from './InnerText';

const Weathers = props => {
  const {title, morImg, aftImg, dinImg, mor, aft, din, temps} = props;
  // console.log(props)

  return (
    <View style={styles.main}>
      <InnerText
        title={'내일 아침'}
        img={morImg}
        desc={mor}
        figure={temps.morning}
      />
      <InnerText
        title={'내일 점심'}
        img={aftImg}
        desc={aft}
        figure={temps.afternoon}
      />
      <InnerText
        title={'내일 저녁'}
        img={dinImg}
        desc={din}
        figure={temps.evening}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '3%',
    // backgroundColor:'black',
    height: '100%',
  },
});
export default Weathers;
