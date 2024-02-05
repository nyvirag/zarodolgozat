import * as React from 'react';
import { Button, View, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TapGestureHandler, RotationGestureHandler, GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import Kep4 from './Kep4';
import Lenyilo from './Lenyilo';
import ProbaFeltoltes from './ProbaFeltoltes'
import { colors } from './Cons';
import KozosScreen from './KozosScreen'
import FerfiEtrend from './FerfiEtrend'
import Ujlap from './Ujlap'
import Video from './Video'
import Lepes from './Lepes'
import KeresesSzoveg from './KeresesSzoveg'
import { color } from 'react-native-reanimated';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Keszitok from './Keszitok'
import Kedveles from './Kedveles'
import Csevego from './Csevego'
import Ido from './Ido'





function HomeScreen({ navigation }) { 
  return (
   <GestureHandlerRootView style={{flex:1}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:colors.black }}>
    
     
     


     
     {/*} <Pressable onPress={() => navigation.navigate('Gyakorlatok')} style={({ pressed }) => ({
        backgroundColor: pressed ? colors.black : colors.sotetlime,
        elevation: pressed ? 2 : 0,
        borderRadius: 10, 
        marginTop:30
        
        
         })} >
        <Text style={{fontSize:25, color:colors.black, padding:10 , paddingHorizontal:52}} > Gyakorlatok</Text>
      </Pressable>
        */}
      

      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Ido/>
        
      </View>
     
     
    </View>
    </GestureHandlerRootView>
  );
}







function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}



function Vissza({ navigation }) {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      
      drawerStyle: {
        backgroundColor: colors.sotetlime,
      },
      drawerLabelStyle: {
        color:'black'
      },
      headerTintColor:colors.sotetlime 
    }}>

      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Pedometer" component={Lepes}  />
      
      <Drawer.Screen name="Gym Motivation Music" component={Video} />
      <Drawer.Screen name="Készítők" component={Keszitok} />
      <Drawer.Screen name="Ido" component={Ido} />
      
      
      
      
   

     

          
     {/* <Drawer.Screen name="Kep4" component={Kep4} />*/}
     {/* <Drawer.Screen name="ProbaFeltoltes" component={ProbaFeltoltes} />*/}
    {/*} <Drawer.Screen name="KozosScreen" component={KozosScreen} />*/}
    {/*<Drawer.Screen name="Gyakorlatok" component={KeresesSzoveg} />*/}
      


    </Drawer.Navigator>
  );
}













const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTheme  = {
  ...DefaultTheme,
  colors:{
    background: colors.black,
    primary: colors.black,
    card: colors.black,
    text: colors.sotetlime,
    border: colors.sotetlime,
    
    
    
  }
}

export default function App() {
  return (
   
    <NavigationContainer theme={MyTheme} >
       <Tab.Navigator  initialRouteName="Root" screenOptions={{
        title:'',
   
    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: colors.sotetlime,
        borderRadius: 15,
        height: 55,
        shadowColor:colors.black,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity:0.4,
        shadowRadius:3,
        
        
        
    }
}} >
        <Tab.Screen name="otthon" initialRouteName="Home" component={Vissza} options={{headerShown:false,    tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-left-bottom" color={color} size={26} marginTop={11} />
          ),}} />
        <Tab.Screen name="Gyakorlatok" component={KeresesSzoveg} options={{headerShown:false,   tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={26} marginTop={11} />
          ), }}  />
        <Tab.Screen name="Étrendek"   component={Lenyilo} options={{headerShown:false, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-female" color={color} size={26} marginTop={11} />
          ), }}  />
        <Tab.Screen name="Ferfi" component={FerfiEtrend} options={{headerShown:false,  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-male" color={color} size={26} marginTop={11} />
          ),}}  />
        <Tab.Screen name="Csevego" component={Csevego} options={{headerShown:false,  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-reply-text-outline" color={color} size={26} marginTop={15} />
          ),}}  />
          <Tab.Screen name="Kedveles" component={Kedveles} options={{headerShown:false,  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-multiple-outline" color={color} size={26} marginTop={15} />
          ),}}  />


       
      </Tab.Navigator>




      
      
    </NavigationContainer>
 

  );
}


const styles = StyleSheet.create({
 
});


