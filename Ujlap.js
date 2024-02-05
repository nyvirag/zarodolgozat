import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet , FlatList} from 'react-native';
import Ipcim  from './Ipcim';

const Ujlap = ({route}) => {
    const {atkuld1, atkuld2} = route.params
    const [data, setData] = useState([]);


    const getMovies = async () => {
      try {

        var adatok ={
          "bevitel1":atkuld2
      }

        const response = await fetch(Ipcim.Ipcim+'keresnoikaja', {
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
    };
  
    useEffect(() => {
      getMovies();
    }, []);


 

  return (
    <View style={styles.container}>
      <Text>{atkuld1} </Text>
     

      <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View>
              <Text>
              {item.kaja_kategoria}
            </Text>
            <Text>
              {item.etel}
            </Text>
            <Text>
              Fehérje: {item.feherje},  Szénhidrát: {item.szenhidrat},  Zsír: {item.zsir}
            </Text>
            <Text>
              Egy {item.suly_mertek} kg-os nő számára.
            </Text>
            
            </View >
          )}
        />



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Ujlap;