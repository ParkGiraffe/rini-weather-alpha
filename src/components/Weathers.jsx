import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import InnerText from './InnerText';

const Weathers = props => {
  const {title, img, desc, figure} = props;

  return (
    <View style={styles.main}>
      <InnerText
        title={'내일 아침'}
        img={img}
        desc={desc.morning}
        figure={figure.morning}
      />
      <InnerText
        title={'내일 점심'}
        img={img}
        desc={desc.afternoon}
        figure={figure.afternoon}
      />
      <InnerText
        title={'내일 저녁'}
        img={img}
        desc={desc.evening}
        figure={figure.evening}
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
