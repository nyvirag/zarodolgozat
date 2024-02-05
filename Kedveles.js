import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Pressable, RefreshControl} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ipcim from './Ipcim';
import {colors} from './Cons'
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { TapGestureHandler, RotationGestureHandler, GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'

const KeresesSzoveg = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [izomcsoportdata, setizomcsoportData]= useState([]);
  const [kivalasztott, kivalasztottData] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'gyakorlat');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const izomcsopi = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'kedvencek');
      const json = await response.json();
      setizomcsoportData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    getMovies();
  };

  useEffect(() => {
    izomcsopi()
  }, []);


 




  return (
<GestureHandlerRootView>
<ScrollView  
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={"white"}/>} >
 
    
    <View style={{flex: 1, padding: 24}}>
        
    <Text  style={{ fontSize:30, textAlign:'center', paddingHorizontal:8, color:colors.feher, marginTop:30, marginBottom:40, padding:30, paddingHorizontal:60, 
               backgroundColor: colors.black, borderWidth:2, borderColor:colors.sotetlime, alignSelf:'center', borderRadius:4,}}>Kedvencek</Text>
               
    

      

        

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={izomcsoportdata}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (

              
            <View style={{justifyContent:'center', alignItems:'center'}}>

              <View  style={{flexDirection: 'row', alignItems: 'center', color:colors.feher}}>

              <View style={{flex: 1, height: 1, backgroundColor:colors.feher,}} />


            <Text style={{ fontSize:30, textAlign:'center', paddingHorizontal:8, color:colors.feher}}>
              {item.gyakorlat_nev}
            </Text>



            <View style={{flex: 1, height: 1, backgroundColor:colors.feher, color:colors.feher}} />

            </View>



            <Text style={{fontSize:20, textAlign:'center', color:colors.feher}}>
              {item.gyakorlat_leiras}
            </Text>


            <Image source={{ uri: Ipcim.Ipcim+item.gyakorlat_img }} style={{ width: 125, height: 125, marginBottom:15, marginTop:10, borderRadius:10  }}/>
            

         


      
      
            
            </View>
           
           
          )}
        />
      )}
    </View>
    </ScrollView>
    </GestureHandlerRootView>
  );
  
};



export default KeresesSzoveg;