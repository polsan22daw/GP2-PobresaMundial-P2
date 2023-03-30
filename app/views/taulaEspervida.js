import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';

export class TaulaEspervida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items2: [],
      expanded: false,
      expandedItem: {},
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase('pobresa.db');
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items2 (id integer primary key not null, pais text, any integer, espervida double, Adult_Mortality integer, Infant_Deaths integer, bandera text, descripcio text);'
      );
      
      tx.executeSql(
        'select * from items2 where pais in (?,?,?,?,?,?,?,?,?,?)',
        ['Italia', 'Vietnam', 'Argentina', 'Canada', 'Marruecos', 'Suecia', 'Sudafrica', 'Indonesia', 'Camerun', 'Brasil'],
        (_, { rows }) => {
          const existingPais = rows._array.map(item2 => item2.pais);
          if (!existingPais.includes('Italia')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Italia', 2015, 82.7, 56, 1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png', 'Italia es un país de Europa del sur que forma parte de la Unión Europea (UE). Su territorio consiste en la Península Itálica de dos grandes islas en el mar Mediterráneo: Sicilia y Cerdeña. Rodeada en el norte por Alpes, limita con Francia, Suiza, Austria y Eslovenia. En el sur, se encuentra con el mar Adriático y el mar Jónico. Su capital es Roma, la ciudad más grande del país y una de las más importantes del mundo.'],
              () => {}
            );
          }
          if (!existingPais.includes('Vietnam')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Vietnam', 2015, 76, 127, 28, 'https://www.banderas-mundo.es/data/flags/w1600/vn.png', 'Vietnam es un país de Asia del Sudeste, con una población de 96 millones de habitantes. Limita al norte con China, al este con Laos y Camboya, al sur con el Mar de la China Meridional y al oeste con el Mar de la China Oriental. Su capital es Hanoi y su ciudad más poblada, Ho Chi Minh.'],
              () => {}
            );
          }
          if (!existingPais.includes('Argentina')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Argentina', 2015, 76.3, 116, 8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png', 'Argentina es un país ubicado en el extremo sur de América del Sur. Su territorio se divide en 23 provincias y la Ciudad Autónoma de Buenos Aires, que es su capital y ciudad más poblada. Se caracteriza por ser un país notablemente agro-ganadero, que alberga en su extenso territorio una gran variedad de climas, relieves, flora y fauna. Es uno de los países más visitados de Latinoamérica, que recibe gran cantidad de turistas atraídos por sus paisajes, su vida cultural y su gastronomía, en la que destacan el vino y la carne. Argentina es un país con costumbres y tradiciones muy arraigadas.'],
              () => {}
            );
          }
          if (!existingPais.includes('Canada')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Canada', 2015, 82.2, 64, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/313qI-6O1XL._AC_.jpg', 'Canadá, el gran septentrión del continente americano, es un país de enorme extensión geográfica, de hecho es el segundo más grande del mundo y el mayor América, con 10 millones de kilómetros cuadrados de superficie. Posee 6 diferentes husos horarios. Limita geográficamente con el Océano Ártico al Norte; con Alaska al Noroeste; los Estados Unidos al Sur; el Océano Atlántico al Este; y el Océano Pacífico al Oeste. Tierra de grandes bellezas naturales.'],
              () => {}
            );
          }
          if (!existingPais.includes('Marruecos')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Marruecos', 2015, 72.8, 11, 20, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/640px-Flag_of_Morocco.svg.png', 'El Reino de Marruecos está situado en el extremo noroeste del continente africano. Está bordeado por el Mar Mediterráneo al norte y el Océano Atlántico al oeste. El desierto del Sahara se extiende por gran parte del sur y del este de Marruecos.'],
              () => {}
            );
          }
          if (!existingPais.includes('Suecia')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Suecia', 2015, 82.4, 53, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png', 'Suecia es un país nórdico localizado en la península escandinava en el norte de Europa. Estocolmo ha sido su capital permanente desde 1523. Suecia, junto a Noruega, ocupa la mayor parte de la península y es el quinto país más extenso en Europa.'],
              () => {}
            );
          }
          if (!existingPais.includes('Sudafrica')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Sudafrica', 2015, 62.9, 328, 42, 'https://m.media-amazon.com/images/I/51DZBSXKLTL._AC_SL1420_.jpg', 'El nombre oficial del país es República de Sudáfrica, cuenta con una superficie territorial de 1,219,090 km2 divididos en nueve provinicas. Limita al norte con Namibia, Botswana y Zimbabwe; al este con Mozambique y Swazilandia.'],
              () => {}
            );
          }
          if (!existingPais.includes('Indonesia')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Indonesia', 2015, 69.1, 176, 114, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png', 'Indonesia es un país situado entre el Sudeste asiático y Oceanía. Su territorio lo compone un archipiélago de alrededor de 17.500 islas a ambos lados del Ecuador, con una superficie de más de 1.900.000 km².'],
              () => {}
            );
          }
          if (!existingPais.includes('Camerun')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Camerun', 2015, 57.3, 357, 45, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1280px-Flag_of_Cameroon.svg.png', 'Camerún limita al noroeste con Nigeria, al este con Chad y la República Centroafricana, y al sur con Gabón, Congo y Guinea Ecuatorial. Su litoral se encuentra en el golfo de Biafra, que forma parte del golfo de Guinea (océano Atlántico).'],
              () => {}
            );
          }
          if (!existingPais.includes('Brasil')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Brasil', 2015, 75, 142, 42, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ezTv50yvL._SL1500_.jpg', 'La República Federal de Brasil es el país más grande de América del Sur y el quinto país con la mayor extensión de territorio del mundo después de Rusia, China, Canadá y Estados Unidos. Su territorio ofrece importantes recursos naturales, como tierras fértiles, minas y enormes masas de agua que sirven para generar energía hidroeléctrica. Sin embargo, a pesar de ser una de las principales economías del mundo existen desigualdades sociales extremas, degradación ambiental y crisis financiera.'],
              () => {}
            );
          }
          else {
            // El dato ya existe, no es necesario insertarlo
            tx.executeSql('select * from items2 ORDER BY espervida DESC', [], (_, { rows }) =>
              this.setState({ items2: rows._array })
            );
          }
        }
      );
    });
  }

  toggleExpand = item => {
    if (item) {
      this.setState({
        expanded: this.state.expandedItem.id === item.id ? !this.state.expanded : true,
        expandedItem: item,
      });
    }
  };

  render() {
    const { expandedItem } = this.state;
    if (this.state.items2.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Cargando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.items2}
            stickyHeaderIndices={[0]}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.toggleExpand(item)}>
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.pais}</Text>
                  <Text style={styles.cell}>{item.any}</Text>
                  <Text style={styles.cell}>{item.espervida}</Text>
                  <Text style={styles.cell}>{item.Adult_Mortality}</Text>
                  <Text style={styles.cell}>{item.Infant_Deaths}</Text>
                </View>
                {expandedItem && expandedItem.id === item.id ? (
                <View style={styles.expanded}>
                  <Image source={{ uri: item.bandera }} 
                  style={{ 
                  width: 80, 
                  height: 50,    
                  borderColor: 'black' }} />
                  <Text style={styles.cell}>{item.descripcio}</Text>
                </View>
              ) : null}
              </TouchableOpacity>
            )}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Pais</Text>
                <Text style={styles.headerText}>Any</Text>
                <Text style={styles.headerText}>Esper. Vida</Text>
                <Text style={styles.headerText}>Mortalitat Adulta</Text>
                <Text style={styles.headerText}>Mortalitat Infants</Text>
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
    backgroundColor: '#f2f2f2',
  },
  row: {
    height: 60,
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
    height: 60,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000',
    backgroundColor: 'lightgrey',
    padding: 10,
  },
  headerText: {
    fontSize: 9,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default TaulaEspervida;