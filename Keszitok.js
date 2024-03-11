import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from './Cons';
import Lepes from './Lepes'
import { watchStepCount } from 'expo-sensors/build/Pedometer';
import { useNavigation } from '@react-navigation/native';




const Teglalap = () => {





  
  return (
  
    <View>
    <View style={styles.teglalap} >
        <Text style={{alignSelf:'center', marginTop:40, color:colors.feher}}>
           Kaszonyi Krisztián
        </Text>
    </View>


    <View style={styles.teglalap} >
        <Text style={{alignSelf:'center', marginTop:40, color:colors.feher, }}>
          Nyisztor Virág Márta
        </Text>
    </View>


</View>
  );
};

const styles = StyleSheet.create({
  teglalap: {
    width: 100 * 2,
    height: 100,
    backgroundColor: colors.black,
    borderWidth:2,
    borderColor:colors.sotetlime,
    alignSelf:'center',
    marginTop: 30

  },
});

export default Teglalap;