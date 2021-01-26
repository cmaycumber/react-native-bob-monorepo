import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Package1 from '@react-native-bob-monorepo/package1';
import Package2 from '@react-native-bob-monorepo/package2';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Package {Package1}</Text>
      <Text>Package {Package2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
