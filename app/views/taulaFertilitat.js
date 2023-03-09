import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function FetilitatTable(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.Pais}</Text>
            <Text style={styles.cell}>{item.any1961}</Text>
            <Text style={styles.cell}>{item.any1971}</Text>
            <Text style={styles.cell}>{item.any1981}</Text>
            <Text style={styles.cell}>{item.any1991}</Text>
            <Text style={styles.cell}>{item.any2001}</Text>
            <Text style={styles.cell}>{item.any2011}</Text>
            <Text style={styles.cell}>{item.any2019}</Text>
            <Text style={styles.cell}>{item.any2020}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerText}>Pais</Text>
            <Text style={styles.headerText}>1961</Text>
            <Text style={styles.headerText}>1971</Text>
            <Text style={styles.headerText}>1981</Text>
            <Text style={styles.headerText}>1991</Text>
            <Text style={styles.headerText}>2001</Text>
            <Text style={styles.headerText}>2011</Text>
            <Text style={styles.headerText}>2019</Text>
            <Text style={styles.headerText}>2020</Text>
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