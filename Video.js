import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';

const Video = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
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
        <WebView source={{ uri: 'https://www.youtube.com/embed/mwGDDM7ZDyc?si=QF-vfQf202vVd-Kc' }} style={{ flex: 1 , margin:20 }} />
        <WebView source={{ uri: 'https://www.youtube.com/embed/wtFPIOV2bWM?si=AHt3phKTOPuVfD3y' }} style={{ flex:1, margin:20}} />

     
    </View>
  );
};

export default Video;