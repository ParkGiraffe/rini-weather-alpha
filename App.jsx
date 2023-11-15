import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
      <ScrollView horizontal={true} style={styles.ScrollView}>
        <Text>e1</Text>
        <Text>e2</Text>
      </ScrollView>
      <Text>root</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex:1,
    // marginTop: 100,
  },
  ScrollView: {
    flex: 1,
  },
});

export default App;
