import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Pressable}  from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Ipcim from './Ipcim';
import { colors } from './Cons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { block, color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-navigation';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const KeresesSzoveg = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [text, setText] = useState('');
  const [etrendData, setetrendData] = useState([]);
  const [kajaData, setKajaData] = useState([])
  const [kivalasztott, kivalasztottData] = useState();
  const [current, setCurrent] = useState("test");

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'kaja_noi');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  //picker tartalma
  const kategoria = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'Krisz_kategoria');
      const json = await response.json();
      setKajaData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    kategoria()
  }, []);


  const keresfuggveny = async () => {

    var adatok = {
      "bevitel1": kivalasztott
    }
    try {
      const response = await fetch(Ipcim.Ipcim + 'kaja_kategoriak_noi', {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      }
      );
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };





  return (
    <GestureHandlerRootView>
    <ScrollView>


      <View style={{ flex: 1, padding: 24,  }}>
        <Picker
          selectedValue={kivalasztott}
          onValueChange={(itemValue, itemIndex) =>
            kivalasztottData(itemValue)

          }
          style={{  }}
        >



          {kajaData.map((item) => {
            return (

              <Picker.Item label={item.kategoria_nev} value={item.kategoria_id} color="white" />
            )
          }
          )}
        </Picker>


    {/*}
        <View style={{ marginTop: 20, marginBottom:10,  }}>
        <RadioButtonGroup
          containerStyle={{ marginBottom: 10 }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground='green'
          
        >
          <RadioButtonItem value="test2" label={<Text style={{ color: "white" }}>Example passing React Element</Text>}/>
          <RadioButtonItem
            value="test"
            label={
              <Text style={{ color: "white" }}>Example passing React Element</Text>
            }
          />
        </RadioButtonGroup>
      </View>
        */}

        <Pressable onPress={() => keresfuggveny()} style={({ pressed }) => ({
        backgroundColor: pressed ? colors.black : colors.sotetlime,
        elevation: pressed ? 2 : 0,
        borderRadius: 10, 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3
         })} >
          <Text style={{ fontSize: 25, color: colors.black, padding: 10, textAlign: 'center' }} > Keresés</Text>
        </Pressable>


        

      
       
        



        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>

            
          
          <FlatList
            data={data}
            keyExtractor={(id) => id}
            renderItem={({ item }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center', height: 250,}}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center' , marginTop:30}}>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.feher }} />
                  
                  <Text style={{ textAlign: 'center', paddingHorizontal: 8, fontSize: 25, color:colors.feher, fontWeight:'bold' }}>
                    {item.suly_fajta}  
                  </Text>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.feher }} />
                </View>
                <Text style={{ fontSize: 20, textAlign: 'center', color:colors.feher }}>
                {item.mertek} KG
              </Text>
               
                <Text style={{ fontSize: 20, textAlign: 'center', color:colors.feher }}>
                  {item.etel} 
                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center', marginTop:10,color:colors.feher, }}>
                 Fehérje: {item.feherje} ,
                 Szénhidrát: {item.szenhidrat} ,
                 Zsír: {item.zsir}
                </Text>
                

              </View>
            )}
          />

</View>
          
        )}

      </View>
      </ScrollView>
    </GestureHandlerRootView>
  );



  
};






export default KeresesSzoveg;