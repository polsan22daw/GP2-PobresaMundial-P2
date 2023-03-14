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
              ['Argentina', 2015, 76.3, 116, 8, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png', 'Argentina es un país ubicado en el extremo sur de América del Sur. Su territorio se divide en 23 provincias y la Ciudad Autónoma de Buenos Aires, que es su capital y ciudad más poblada. Se caracteriza por ser un país notablemente agro-ganadero, que alberga en su extenso territorio una gran variedad de climas, relieves, flora y fauna. Es uno de los países más visitados de Latinoamérica, que recibe gran cantidad de turistas atraídos por sus paisajes, su vida cultural y su gastronomía, en la que destacan el vino y la carne. Argentina es un país con costumbres y tradiciones muy arraigadas, algunas heredadas de los inmigrantes que recibió a principios del siglo XX y otras de los pueblos nativos que sobrevivieron a la conquista de América, ya que Argentina fue colonia española hasta 1816, año de su independencia.'],
              () => {}
            );
          }
          if (!existingPais.includes('Canada')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Canada', 2015, 82.2, 64, 2, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/313qI-6O1XL._AC_.jpg', 'Canadá, el gran septentrión del continente americano, es un país de enorme extensión geográfica, de hecho es el segundo más grande del mundo y el mayor América, con 10 millones de kilómetros cuadrados de superficie. Posee 6 diferentes husos horarios. Limita geográficamente con el Océano Ártico al Norte; con Alaska al Noroeste; los Estados Unidos al Sur; el Océano Atlántico al Este; y el Océano Pacífico al Oeste. Tierra de grandes bellezas naturales, variada topografía y una amplia variedad de climas, dado su enorme extensión geográfica. Posee vastas costas, bosques, montañas, lagos y extensas praderas. Canadá cuenta, además, con una de las reservas de agua dulce más importantes del mundo, debido a la gran cantidad de lagos existentes en su territorio y por los glaciares de sus montañas.'],
              () => {}
            );
          }
          if (!existingPais.includes('Marruecos')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Marruecos', 2015, 72.8, 11, 20, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/640px-Flag_of_Morocco.svg.png', 'El Reino de Marruecos está situado en el extremo noroeste del continente africano. Está bordeado por el Mar Mediterráneo al norte y el Océano Atlántico al oeste. El desierto del Sahara se extiende por gran parte del sur y del este de Marruecos. Tanto su litoral marítimo como el desierto y el macizo montañoso del Atlas marcan su configuración geográfica más determinante y su clima. En la zona continental, las temperaturas llegan a ser muy elevadas en los meses de verano (es relativamente habitual que se alcancen los 50º a la sombra en la ciudad de Marrakech). También son muy elevadas en esa época del año las temperaturas diurnas en el Sahara. En la costa, las temperaturas son moderadas. '],
              () => {}
            );
          }
          if (!existingPais.includes('Suecia')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Suecia', 2015, 82.4, 53, 0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1280px-Flag_of_Sweden.svg.png', 'Suecia es un país nórdico localizado en la península escandinava en el norte de Europa. Estocolmo ha sido su capital permanente desde 1523. Suecia, junto a Noruega, ocupa la mayor parte de la península y es el quinto país más extenso en Europa. Tiene una población de diez millones de personas, de los cuales 2 millones son menores de 18 años. Un 85% de su población vive y trabaja en zonas urbanas y disfrutan de un alto nivel de calidad de vida. Es un país con una historia y cultura muy rica e interesante, es por ello que te brindamos algunos datos básicos que debes conocer acerca de este territorio llamado, popularmente, territorio de  vikingos. Suecia goza de una democracia parlamentaria. Los principales grupos políticos se dividen en dos grandes bloques: el bloque de la izquierda y de la derecha. El parlamento sueco se llama Riksdag, y los miembros son elegidos cada cuatro años. El jefe del estado ha sido el rey Carlos XVI Gustaf desde 1973. Sin embargo, no tiene ningún poder político, solo representa el país y forma parte de ceremonias importantes. Aunque Suecia sea parte de la unión Europea, mantiene su propia moneda, el Krona o la corona sueca.'],
              () => {}
            );
          }
          if (!existingPais.includes('Sudafrica')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Sudafrica', 2015, 62.9, 328, 42, 'https://m.media-amazon.com/images/I/51DZBSXKLTL._AC_SL1420_.jpg', 'El nombre oficial del país es República de Sudáfrica, cuenta con una superficie territorial de 1,219,090 km2 divididos en nueve provinicas. Limita al norte con Namibia, Botswana y Zimbabwe; al este con Mozambique y Swazilandia; al sur con el Océano Índico, y al oeste con el Océano Atlántico. Lesotho se encuentra enclavado en Sudáfrica. Cuenta con una población de 53 millones de habitantes, alrededor del 80% de la población es de raza negra. Sudáfrica es la segunda potencia económica del continente detrás de Nigeria y la potencia regional del Sur de África, debido a ello cuenta con una población de inmigrantes de los países vecinos bastante amplia. La economía sudafricana ha experimentado un periodo de lento crecimiento en los últimos años, especialmente comparado a lo que se observa en otras economías africanas. La visión sudafricana de política exterior se basa en la percepción de que el futuro del país está inextricablemente ligado al de África en el ámbito regional y al de los países del Sur en el ámbito internacional. Este planteamiento guía el actuar sudafricano en el exterior y explica su activismo en torno a grupos y organizaciones como BRICS, el G77 y la Unión Africana. No obstante lo anterior, Sudáfrica continúa manteniendo sus principales relaciones comerciales y de inversión con la Unión Europea, Estados Unidos y China.'],
              () => {}
            );
          }
          if (!existingPais.includes('Indonesia')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Indonesia', 2015, 69.1, 176, 114, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png', 'Indonesia es un país situado entre el Sudeste asiático y Oceanía. Su territorio lo compone un archipiélago de alrededor de 17.500 islas a ambos lados del Ecuador, con una superficie de más de 1.900.000 km². La población de Indonesia es de más de 237 millones de personas en unas 6.000 islas. Esto convierte a Indonesia en el cuarto país más poblado del mundo. Comparte fronteras terrestres con Papúa Nueva Guinea, Timor Oriental y Malasia. Un país marcado por la contaminación plástica. Según el Índice de Desarrollo Humano (IDH) elaborado por Naciones Unidas para medir el progreso de un país y de sus habitantes, Indonesia es un país en aún en vías de desarrollo. Uno de los factores donde más se acusa este desequilibrio es en la contaminación a la que se exponen sus habitantes. En este sentido, Indonesia lleva años incinerando la basura plástica de países occidentales como Australia, Canadá, Irlanda, Italia, Nueva Zelanda, Reino Unido y Estados Unidos. Esta práctica se ha intensificado desde que China prohibió la importación de residuos en 2017 y está generando consecuencias desastrosas sobre la cadena alimentaria.'],
              () => {}
            );
          }
          if (!existingPais.includes('Camerun')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Camerun', 2015, 57.3, 357, 45, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1280px-Flag_of_Cameroon.svg.png', 'Camerún limita al noroeste con Nigeria, al este con Chad y la República Centroafricana, y al sur con Gabón, Congo y Guinea Ecuatorial. Su litoral se encuentra en el golfo de Biafra, que forma parte del golfo de Guinea (océano Atlántico). El país ha sido llamado “África en miniatura” por su diversidad geológica y cultural: tiene playas, desiertos, montañas, selvas y sabanas. Su punto más alto es el monte Camerún, en el sudoeste, y sus principales ciudades son Duala, Yaundé y Garua. Habitan el país más de doscientos grupos étnicos y lingüísticos, pero sus lenguas oficiales son el francés y el inglés. Camerún es conocido también por sus estilos musicales autóctonos, especialmente el makossa y el bikutsi, así como por los éxitos de su selección nacional de fútbol.'],
              () => {}
            );
          }
          if (!existingPais.includes('Brasil')) {
            tx.executeSql(
              "insert into items2 (pais, any, espervida, Adult_Mortality, Infant_Deaths, bandera, descripcio) values (?,?,?,?,?,?,?)",
              ['Brasil', 2015, 75, 142, 42, 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ezTv50yvL._SL1500_.jpg', 'La República Federal de Brasil es el país más grande de América del Sur y el quinto país con la mayor extensión de territorio del mundo después de Rusia, China, Canadá y Estados Unidos. Su territorio ofrece importantes recursos naturales, como tierras fértiles, minas y enormes masas de agua que sirven para generar energía hidroeléctrica. Sin embargo, a pesar de ser una de las principales economías del mundo existen desigualdades sociales extremas, degradación ambiental y crisis financiera. Brasil fue invadido por los europeos a partir del 1500 d. C., en especial, por los portugueses que establecieron su primera colonia en 1530 y crearon plantaciones de caña de azúcar a lo largo de la costa. Cuando los portugueses descubrieron las grandes reservas de oro y de diamantes que existían en Brasil, aceleraron su expansión en el territorio y saquearon los metales preciosos para llevarlos al viejo continente.'],
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