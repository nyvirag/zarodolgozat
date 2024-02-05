import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './Cons';
import Lepes from './Lepes'
import { watchStepCount } from 'expo-sensors/build/Pedometer';

const Korocske = () => {
  return (
    <View style={styles.kor} >
        <Text style={{alignSelf:'center'}}>
            <Lepes/>
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  kor: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor:colors.sotetlime,
    borderWidth: 3,
    marginBottom:-200,
    marginTop:-200

  },
});

export default Korocske;