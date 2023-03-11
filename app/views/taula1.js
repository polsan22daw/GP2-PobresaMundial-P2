import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';

export class TaulaPobresa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase('pobresa.db');
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, pais text, poblacio_2022 text, poblacio_2020 text, poblacio_2000 text, area text, index_de_creixement integer, poblacio_mundial integer);'
      );
  
      // Consulta SELECT para verificar si el dato ya existe
      tx.executeSql(
        'select * from items where pais = ?',
        ['Espanya'],
        (_, { rows }) => {
          if (rows.length === 0) {
            // El dato no existe, se puede insertar
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial) values (?,?,?,?,?,?,?)",
              ['Espanya', '46,7M', '46,6M', '40M', '505m2', 0.5, 0.5],
              () => {
                tx.executeSql('select * from items', [], (_, { rows }) =>
                  this.setState({ items: rows._array })
                );
              }
            );
          } else {
            // El dato ya existe, no es necesario insertarlo
            tx.executeSql('select * from items', [], (_, { rows }) =>
              this.setState({ items: rows._array })
            );
          }
        }
      );
    });
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Cargando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.items}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.pais}</Text>
                <Text style={styles.cell}>{item.poblacio_2022}</Text>
                <Text style={styles.cell}>{item.poblacio_2020}</Text>
                <Text style={styles.cell}>{item.poblacio_2000}</Text>
                <Text style={styles.cell}>{item.area}</Text>
                <Text style={styles.cell}>{item.index_de_creixement}</Text>
                <Text style={styles.cell}>{item.poblacio_mundial}</Text>
              </View>
            )}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Pais</Text>
                <Text style={styles.headerText}>2022</Text>
                <Text style={styles.headerText}>2020</Text>
                <Text style={styles.headerText}>2000</Text>
                <Text style={styles.headerText}>Area</Text>
                <Text style={styles.headerText}>Ind. Creix.</Text>
                <Text style={styles.headerText}>Pob. Mund.</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  row: {
    height: 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  cell: {
    fontSize: 9,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  headerText: {
    fontSize: 9,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default TaulaPobresa;