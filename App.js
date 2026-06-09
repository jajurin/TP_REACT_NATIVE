import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const titleText = 'Login App (Laizerovich, Jajurin)';
  const [nombre, handleNombreChange] = React.useState('');
  const [contraseña, handlecontraseñaChange] = React.useState('');

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: 'column', backgroundColor: '#f1f0f1' },
      ]}
    >
      <StatusBar style="dark" />

      <View style={{ flex: 2, backgroundColor: '#612ffc' }}>
        <Text style={styles.titleText}>{titleText}</Text>
      </View>

      <View style={{ flex: 6 }}>
        <Image
          style={[styles.image, { resizeMode: 'center', marginTop: 30 }]}
          source={require('./assets/Coca-Cola_logo.svg.png')}
        />
      </View>

      <View style={{ flex: 4, backgroundColor: '#ffffff' }}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su Email"
          value={nombre}
          onChangeText={handleNombreChange}
        />
          <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          value={contraseña}
          onChangeText={handlecontraseñaChange}
        />
      </View>

      <View style={{ flex: 4, backgroundColor: '#75ce39' }} >
<Button title="Iniciar Sesión"

onPress={() => Alert.alert('se ha presionado')}
/>
            </View>
      <View style={{ flex: 5, backgroundColor: '#bbff00' }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 400,
    height: 150,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a57bfb',
    padding: 10,
    margin: 10,
    
  },
});