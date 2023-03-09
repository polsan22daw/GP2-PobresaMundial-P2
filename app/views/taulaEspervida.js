import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function EspervidaTable(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.Pais}</Text>
            <Text style={styles.cell}>{item.Any}</Text>
            <Text style={styles.cell}>{item.Espervida}</Text>
            <Text style={styles.cell}>{item.Adult_Mortality}</Text>
            <Text style={styles.cell}>{item.Infant_Deaths}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Pais</Text>
            <Text style={styles.headerText}>Any</Text>
            <Text style={styles.headerText}>Esperança de vida</Text>
            <Text style={styles.headerText}>Mortalitat adulta</Text>
            <Text style={styles.headerText}>Mortalitat d'infants</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});