import { Picker } from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Ipcim from './Ipcim'

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'gyakorlatok');
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


  
  return (
    <View style={{flex: 1, padding: 24}}>
     
        <Picker>
        {data.map((item) => (
          <Picker.Item label='()'></Picker.Item>
        ))}
      </Picker>



     
      
    </View>
  );
};

export default App;