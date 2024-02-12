import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import InnerText from './InnerText';

const Weathers = props => {
  const {title, img, mor, aft, din, temps} = props;

  return (
    <View style={styles.main}>
      <InnerText
        title={'내일 아침'}
        img={img}
        desc={mor}
        figure={temps.morning}
      />
      <InnerText
        title={'내일 점심'}
        img={img}
        desc={aft}
        figure={temps.afternoon}
      />
      <InnerText
        title={'내일 저녁'}
        img={img}
        desc={din}
        figure={temps.evening}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '3%',
  },
});
export default Weathers;
