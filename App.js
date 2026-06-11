  import { StatusBar } from 'expo-status-bar';
import react from 'react';
  import React from 'react';
  import { StyleSheet, View, Image, SafeAreaView, Text, TextInput, Button, Alert, Pressable } from 'react-native';

  export default function App() {
    const titleText = 'Login App (Laizerovich, Jajurin)'
    const clave = 'Olvidaste la clave?'
    const cuenta = 'Crear Cuenta'
    const error = 'Usuario o contraseña incorrectos, vuelva a intentar '
    const correcto = '¡Bienvenido! '
    const [email, setEmail] = React.useState('')
    const [contraseña, setcontraseña] = React.useState('')
    const [errorEst, setError] = react.useState(false)
    const [login, setLogin] = react.useState(false)

    const EMAIL = "jajuLaize@gmail.com"
    const CONTRA_HARD= "hola"

    return (
      <SafeAreaView
        style={[
          styles.container,
          { flexDirection: 'column', backgroundColor: '#f1f0f1' },
        ]}
      >
        <StatusBar style="dark" />

        <View style={{ flex: 1, backgroundColor: '#612ffc' }}>
          <Text style={styles.titleText}>{titleText}</Text>
        </View>

        <View style={{ flex: 4 }}>
          <Image
            style={[styles.image, { resizeMode: 'center', marginTop: 30 }]}
            source={require('./assets/Coca-Cola_logo.svg.png')}
          />
        </View>

        <View style={{ flex: 3, }}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese su Email"
            value={email}
          onChangeText={setEmail}
          />
            <TextInput
            style={styles.input}
            placeholder="Ingrese su contraseña"
            value={contraseña}
          onChangeText={setcontraseña}
            secureTextEntry={true} //como el type password de html
          />
        </View>

        <View style={{ flex: 1, alignSelf: 'center',width: 350 ,  }} >
  <Pressable
    style={styles.boton}
    onPress={() => {
    if (email === EMAIL && contraseña === CONTRA_HARD) {
      setError(false)
      setLogin(true)
    } else {
      setError(true)
      setLogin(true)
    }
  }}
  >
    
    <Text style={styles.textoBoton}>Ingresar</Text>
  </Pressable>
              </View>
        <View style={{ flex: 5 }}>
           {errorEst ? (
     <Text style={styles.error}>
      {error}
  </Text>
) : login && (
  <Text style={styles.correcto}>
    {correcto}
  </Text>
)}
          <Text style={styles.bajos}>{clave}</Text>
        <Text style={styles.bajos}>{cuenta}</Text>
        </View>

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
      backgroundColor: 'white'
      
    },
    bajos:{
      fontSize: 14,
      textAlign: 'center',
    marginTop: 7, 
    fontWeight: 'bold',
      color: 'black'
    },
    boton: {
    backgroundColor: '#8e5dfb',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error:{
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  correcto:{
    color: 'green',
    fontWeight: 'bold',
    alignSelf: 'center'
    }

  });