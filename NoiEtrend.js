import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TextInput, Button, Image, StyleSheet, Pressable, SectionList}  from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Ipcim from './Ipcim';
import { colors } from './Cons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { block, color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-navigation';


const KeresesSzoveg = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [text, setText] = useState('');
  const [etrendData, setetrendData] = useState([]);
  const [kivalasztott, kivalasztottData] = useState();

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
  const izomcsopi = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'sulyok');
      const json = await response.json();
      setetrendData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    izomcsopi()
  }, []);


  const keresfuggveny = async () => {

    var adatok = {
      "bevitel1": kivalasztott
    }
    try {
      const response = await fetch(Ipcim.Ipcim + 'keresnoikaja', {
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


      <View style={{ flex: 1, padding: 24, marginTop:50 }}>
        <Picker
        style={{}}
          selectedValue={kivalasztott}
          mode='dropdown'
          dropdownIconColor={colors.sotetlime}
          onValueChange={(itemValue, itemIndex) =>
            kivalasztottData(itemValue)

          }
        
        >



          {etrendData.map((item) => {
            return (

              <Picker.Item style={{backgroundColor:colors.black}} label={item.suly_fajta} value={item.suly_id} color="white" />
            )
          }
          )}
        </Picker>

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
                    {item.kategoria_nev}
                  </Text>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.feher }} />
                </View>
                <Text style={{ fontSize: 20, textAlign: 'center', color:colors.feher, padding:10}}>
                  {item.mertek}kg-os Nő számára 
                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color:colors.feher }}>
                  {item.etel} 
                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center', color:colors.feher, }}>
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