import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Taulas = ({ navigation }) => {
  const taula1 = () => {
    navigation.navigate('Pobresa');
  };

  const taula2 = () => {
    navigation.navigate('Esperança de vida');
  };

  const taula3 = () => {
    navigation.navigate('Fertilitat');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={taula1}>
        <Text style={styles.buttonText}>Pobresa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula2}>
        <Text style={styles.buttonText}>Esperança de vida</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={taula3}>
        <Text style={styles.buttonText}>Fertilitat</Text>
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
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Taulas;