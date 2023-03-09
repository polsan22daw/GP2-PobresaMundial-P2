import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Taulas = ({ navigation }) => {
  const taula1 = () => {
    navigation.navigate('Taula1');
  };

  const taula2 = () => {
    navigation.navigate('Taula2');
  };

  const taula3 = () => {
    navigation.navigate('Taula3');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={taula1}>
        <Text style={styles.buttonText}>Tabla 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula2}>
        <Text style={styles.buttonText}>Tabla 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula3}>
        <Text style={styles.buttonText}>Tabla 3</Text>
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
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Taulas;