import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Pressable} from 'react-native';
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

  const izomcsopi = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'izomcsoport');
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


  const keresfuggveny=async()=>{
    
    var adatok = {
        "bevitel1":kivalasztott
    }
    try {
        const response = await fetch(Ipcim.Ipcim+'keresszoveg', {
            method: "POST",
            body: JSON.stringify(adatok),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          }
        );
        const json = await response.json();
        
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
  }



  const kedveles=async (id) =>{
    alert(id)

    var adatok = {
      "bevitel1":id
  }
  try {
      const response = await fetch(Ipcim.Ipcim+'kedveles_gyakorlat', {
          method: "POST",
          body: JSON.stringify(adatok),
          headers: {"Content-type": "application/json; charset=UTF-8"}
        }
      );
      const text = await response.text();
      
     // alert(text)
    } catch (error) {
      alert("Valami hiba történt")
    } 

  }

  return (
<GestureHandlerRootView>
<ScrollView>
 
    
    <View style={{flex: 1, padding: 24}}>
        <Picker 
        selectedValue={kivalasztott}
        onValueChange={(itemValue, itemIndex) =>
          kivalasztottData(itemValue)
          
        }>



        {izomcsoportdata.map((item) => {
          return (

            <Picker.Item label={item.izomcsoport_nev} value={item.izomcsoport_id}  color="white"/>
          )
        }
        )}
      </Picker>

    


 
        

        <Pressable onPress={()=>keresfuggveny()} style={({ pressed }) => ({
        backgroundColor: pressed ? colors.black : colors.sotetlime,
        elevation: pressed ? 2 : 0,
        borderRadius: 10, 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3
         })} >
        <Text style={{fontSize:25, color:colors.black, padding:10 , textAlign:'center'}} > Keresés</Text>
      </Pressable>
      

        

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({gyakorlat_id}) => gyakorlat_id}
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

            <Pressable onPress={()=>kedveles(item.gyakorlat_id)} style={({ pressed }) => ({
        backgroundColor: pressed ? colors.black : colors.sotetlime,
        elevation: pressed ? 2 : 0,
        borderRadius: 10, 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3,
        marginBottom:35
         })} >
        <Text style={{fontSize:25, color:colors.black, padding:10 , textAlign:'center', justifyContent:'center',}} > Kedvelés </Text>
      </Pressable>


      
      
            
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