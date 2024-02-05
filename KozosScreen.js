import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button , Pressable} from 'react-native';
import Ipcim from './Ipcim';
import {colors} from './Cons'

const KozosScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim + 'felhasznalo_cel');
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View>
              <Text style={{color:colors.feher, textAlign:'center',fontSize:30}}>
                {item.cel_elnevezes}
              </Text>
             

              <Pressable onPress={() => navigation.navigate("Ujlap", { atkuld1: item.cel_elnevezes, atkuld2: item.cel_id })} style={({ pressed }) => ({
        backgroundColor: pressed ? colors.black : colors.sotetlime,
        elevation: pressed ? 2 : 0,
        borderRadius: 10, marginBottom:40 })}
              
               >
                <Text style={{ fontSize: 25, color: colors.black, padding: 10, textAlign:'center' }} >Részletek</Text>
              </Pressable>
            </View >
          )}
        />
      )}
    </View>
  );
};

export default KozosScreen;