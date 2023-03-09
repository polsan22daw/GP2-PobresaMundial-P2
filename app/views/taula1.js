import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function PovertyTable(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.Pais}</Text>
            <Text style={styles.cell}>{item.Rank}</Text>
            <Text style={styles.cell}>{item.Continent}</Text>
            <Text style={styles.cell}>{item.Poblacio}</Text>
            <Text style={styles.cell}>{item.Area}</Text>
            <Text style={styles.cell}>{item.Index_de_Creixement}</Text>
            <Text style={styles.cell}>{item.Poblacio_Mundial}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Pais</Text>
            <Text style={styles.headerText}>Rank</Text>
            <Text style={styles.headerText}>Continent</Text>
            <Text style={styles.headerText}>Poblacio</Text>
            <Text style={styles.headerText}>Area (km²)</Text>
            <Text style={styles.headerText}>Index de Creixement</Text>
            <Text style={styles.headerText}>Població Mundial (%)</Text>
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