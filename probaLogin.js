import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Drawer } from 'react-native-paper';
import fooldal from './App'
import { colors } from './Cons';



// Bejelentkezési képernyő
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');






  const handleLogin = () => {
    // Ide jöhet a bejelentkezési logika
    // Példakód: egyszerűen csak kiírjuk a felhasználónevet és jelszót az értesítési sávba
    Alert.alert('Bejelentkezve', `Felhasználónév: ${username}, Jelszó: ${password}`);
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Felhasználónév"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Jelszó"
        secureTextEntry
      />
      <Button title="Bejelentkezés" onPress={handleLogin} />
      <Button title="Regisztráció" onPress={() => navigation.navigate('Registration')} />
    </View>
  );
};

// Regisztrációs képernyő
const RegistrationScreen = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Ide jöhet a regisztrációs logika
    // Példakód: egyszerűen csak kiírjuk a felhasználónevet és jelszót az értesítési sávba
    Alert.alert('Regisztrálva', `Felhasználónév: ${username}, Jelszó: ${password}`);
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Felhasználónév"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Jelszó"
        secureTextEntry
      />
      <Button title="Regisztráció" onPress={handleRegistration} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer independent={true} >
      {isAuthenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Fooldal" component={App} />
        </Tab.Navigator>
      ) : (
        <Pressable onPress={() => navigation.navigate('Fooldal')} style={({ pressed }) => ({
            backgroundColor: pressed ? colors.black : colors.sotetlime,
            elevation: pressed ? 2 : 0,
            borderRadius: 10, 
            marginTop:90,
            marginBottom:10, 
             })} >
            <Text style={{fontSize:25, color:colors.black, padding:10, paddingHorizontal:59 }} > Női Étrend</Text>
          </Pressable>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default App;