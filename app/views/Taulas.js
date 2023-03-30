import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Taulas = ({ navigation }) => {
  const taula1 = () => {
    navigation.navigate('Poblacio');
  };

  const taula2 = () => {
    navigation.navigate('Esperança de vida');
  };

  const taula3 = () => {
    navigation.navigate('Fertilitat');
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transform: [{rotate: '180deg'}]
        }}
        source={Url = { uri: 'https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-azul-marino-576x1024.jpg' }}
      />
      <TouchableOpacity style={styles.button} onPress={taula1}>
        <Text style={styles.buttonText}>Països ordenats per Població Mundial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula2}>
        <Text style={styles.buttonText}>Països ordenats per Esperança de Vida</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula3}>
        <Text style={styles.buttonText}>Països ordenats per Fertilitat del 2020</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e2eaff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    width: 300,
    height: 95,
  },
  buttonText: {
    textAlign: 'center',
    color: '#223d89',
    fontSize: 18,
  },
});

export default Taulas;