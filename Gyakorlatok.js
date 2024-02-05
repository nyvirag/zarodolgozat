import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, Button, StyleSheet} from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import {Picker} from '@react-native-picker/picker';
import Ipcim from './Ipcim';
import { colors } from './Cons';
import { color } from 'react-native-reanimated';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSeged, setSelectedSeged] = useState();
  const [current, setCurrent] = useState("test");

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'izomcsoportok');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  const kattintas =()=>{
    alert(selectedSeged)
  }

  return (

<View style={{flex: 1, padding: 24, backgroundColor:colors.black}}>
<RadioButtonGroup
        
        containerStyle={{ }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="transparent"
      >
        
        <RadioButtonItem
        style={{ }}
          value="test"
          label={
            <Text style={{ fontSize:20}}>Nő</Text>
          }
        />
        <RadioButtonItem
          value="test"
          label={
            <Text style={{ fontSize:20}}>Férfi</Text>
          }
        />
      </RadioButtonGroup>






<Picker
style={{}}
selectedValue={selectedSeged}
onValueChange={(itemValue, itemIndex) =>
setSelectedSeged(itemValue)

}>
{data.map((item)=>{
   return(
     <Picker.Item label={item.izomcsoport_nev} value={item.izomcsoport_id}  />
 )}
)}
</Picker>
<Button
       onPress={()=>kattintas()}
       title="Kiválaszt"
       
     />

</View>





  );
  
};




export default App;