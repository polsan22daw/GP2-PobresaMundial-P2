import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';

export class TaulaPobresa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expanded: false,
      expandedItem: {},
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase('pobresa.db');
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, pais text, poblacio_2022 text, poblacio_2020 text, poblacio_2000 text, area text, index_de_creixement integer, poblacio_mundial integer, bandera text, descripcio text);'
      );

      tx.executeSql(
        'select * from items where pais in (?,?,?,?,?,?,?,?,?)',
        ['Espanya', 'Francia', 'Corea del Sur', 'Alemanya', 'Portugal', 'Tailàndia', 'Xina', 'Japó', 'EEUU'],
        (_, { rows }) => {
          const existingPais = rows._array.map(item => item.pais);
          if (!existingPais.includes('Espanya')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Espanya', '47,5M', '47,3M', '40,7M', '505k', 1.2, 0.6, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png', 'La capital de España es la ciudad de Madrid y es un país gobernado por una monarquía parlamentaria bajo una forma de gobierno democrática. Sus costumbres, historia y geografía convierten a España en uno de los países más visitados del mundo y una de las principales economías mundiales. España tiene una extensión territorial de 505.370 km² y es el 4º país más extenso del continente europeo (detrás de Rusia, Ucrania y Francia). Dentro de Europa, España ocupa la península ibérica, más conocida como España peninsular, y las islas Baleares. En África el territorio de España se extiende por las ciudades de Ceuta y Melilla y las islas Canarias, Chafarinas, Alhucemas, isla de Alborán y el peñón de Vélez de la Gomera.'],
              () => { }
            );
          }
          if (!existingPais.includes('Francia')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Francia', '64,6M', '64,4M', '58,6', '551k', 1.2, 0.81, 'https://www.banderasvdk.com/blog/wp-content/uploads/francia_400px-300x212.jpg', 'Francia (o la República Francesa) es un país soberano ubicado en Europa occidental y miembro de la Unión Europea. Tiene una superficie total, entre islas y territorio continental, de 675.417 km2 y su capital es París, una de las ciudades más turísticas del mundo, que está atravesada por el río Sena. Es una república semipresidencialista y una de las principales economías mundiales. Francia se destaca por su producción de vinos, sus paisajes, cultura e historia, que hacen de este país uno de los más visitados del mundo.La parte continental de Francia limita al sur con el mar Mediterráneo, Italia y Mónaco; al suroeste con el mar Cantábrico, Andorra y España; al oeste con el océano Atlántico; al norte con el Canal de la Mancha, Mar del Norte, Bélgica y el Reino Unido con el que está unido por un túnel subterráneo que atraviesa el canal de la Mancha y al este con Luxemburgo, Suiza y Alemania.'],
              () => { }
            );
          }
          if (!existingPais.includes('Corea del Sur')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Corea del Sur', '51,8M', '51,8M', '46,7M', '100k', 9.9, 0.65, 'https://www.banderas-mundo.es/data/flags/w580/kr.png', 'A través del tiempo, la historia de Corea ha sido turbulenta con numerosas guerras, incluyendo invasiones tanto de China como de Japón. Desde el establecimiento de la república moderna en 1948, Corea del Sur luchó con las secuelas de conflictos bélicos anteriores como la ocupación japonesa (1910-1945), además de la Guerra de Corea (1950-1953) y las décadas de gobiernos autoritarios. Mientras que el gobierno adoptó oficialmente una democracia de estilo occidental desde la fundación de la república, los procesos de elección presidencial sufrieron grandes irregularidades. No fue sino hasta 1987 cuando se llevaron a cabo las primeras elecciones justas y directas, por lo que, desde entonces, el país es considerado una democracia multipartidista. La economía de Corea del Sur ha crecido rápidamente desde la década de 1950. Hoy en día, es la 13ª economía más grande (por PIB PPA) del mundo y está clasificado como país desarrollado por la ONU, el Banco Mundial y el Fondo Monetario Internacional (FMI).​ También se encuentra entre los países más avanzados tecnológicamente y mejor comunicados; es el tercer país con mayor número de usuarios de Internet de banda ancha entre los países de la OCDE, siendo también uno de los líderes globales en producción de aparatos electrónicos, dispositivos semiconductores y teléfonos móviles. También cuenta con una de las infraestructuras más avanzadas en el mundo​ y líder mundial en la industria de la construcción naval, encabezada por compañías prominentes como Hyundai Heavy Industries.'],
              () => { }
            );
          }
          if (!existingPais.includes('Alemanya')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Alemanya', '83,3M', '83,3M', '81,5M', '357k', 9.9, 1.05, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png', 'Alemania o República Federal de Alemania es un país ubicado en el continente europeo. Este país es una república parlamentaria federal que se divide en 16 estados federados y cuya capital es llama Berlín. Alemania cuenta con un territorio de 357.376 km2. Limita al norte con el Mar del Norte, Mar Báltico y Dinamarca, hacia el este con Polonia y República Checa, en el sur limita con Austria y Suiza y hacia el oeste con Luxemburgo, Francia, Países Bajos y Bélgica.'],
              () => { }
            );
          }
          if (!existingPais.includes('Portugal')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Portugal', '10,2M', '10,2M', '10,3M', '92k', 9.9, 0.13, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.svg.png', 'Portugal, oficialmente la República Portuguesa, es un Estado de Europa Meridional, fundado en 1143, que ocupa una superficie total de 92.212 km2. La parte continental está situada en el extremo suroeste de la península Ibérica bordeando al norte y al este con España, y al oeste y al sur con el Océano Atlántico. El clima portugués se caracteriza por inviernos y veranos suaves, que varían, sin embargo, de una región a otra. En el norte se registra el nivel de precipitación más elevado y temperaturas más bajas, pero es en el interior donde se dan las diferencias de temperatura más amplias. Portugal es un país con 10,6 millones de habitantes (2011) y una densidad de población de 115,4 habitantes / km2, comprobándose una mayor concentración de la población a lo largo de la franja costera.'],
              () => { }
            );
          }
          if (!existingPais.includes('Tailàndia')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Tailàndia', '71,6M', '71,4M', '63M', '513k', 1.2, 0.9, 'https://banderasgarsan.com/wp-content/uploads/2019/12/bandera-tailandia-banderas-y-publicidad-garsan.jpg', 'Tailandia, es un país del Sudeste Asiático que limita con Camboya y Laos al este, Myanmar al oeste y Malasia al sur. La costa oriental asoma al golfo de Tailandia y la occidental está bañada por el mar de Andamán. Tiene una superficie de 513.115 km2, similar a España, y una población que supera los 65.000.000 de habitantes. Bangkok es la capital de Tailandia, la ciudad más grande y poblada del país y una de las más importantes del mundo. A diferencia de otros países del Sudeste Asiático, es el único que nunca ha sido colonizado y que ha mantenido su independencia, algo que los tailandeses sienten con orgullo, preservando así su cultura, su historia y el estilo de vida tradicional. Tailandia goza de una monarquía constitucional venerada por todos sus habitantes desde 1973, y su Majestad es el Rey Maha Vajiralongkorn, más conocido como Rama X, el décimo de la dinastía Chakri tras la muerte de su padre, el Rey Bhumibol Adulyadej en 2016, siendo uno de los monarcas que más tiempo ha reinado en el mundo.'],
              () => { }
            );
          }
          if (!existingPais.includes('Xina')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Xina', '1.425M', '1.424M', '1.264M', '9.600k', 1, 17.88, 'https://static.vecteezy.com/system/resources/previews/005/882/915/non_2x/chinese-national-flag-free-vector.jpg', 'China es el país con mayor población del mundo: más de 1.300 millones de habitantes, lo que representa un 20 por ciento de la población de la Tierra. Ocupa la mayor parte de Asia Oriental y es el cuarto país más grande del mundo después de Rusia, Canadá y Estados Unidos. La geografía de China es muy variada, con colinas, llanuras y deltas en el este, y desiertos, altas mesetas y montañas en el oeste. El clima también es muy diverso: desde el clima tropical en el sur (Hainan) al boreal en el noreste (Manchuria). La desigual distribución de la población es consecuencia de la peculiar geografía de China: el 94 por ciento vive en el tercio este del país. En la provincia de Shandong, de clima templado, viven más de 90 millones de personas; sin embargo, el Tíbet, con su duro clima de altiplanicie, alberga a menos de 3 millones. Las regiones costeras son las económicamente más desarrolladas, lo que las convierte en un imán para unos 150 millones de chinos que migran de las zonas rurales pobres del interior. Esta cifra, que corresponde a 2008, crece aproximadamente diez millones al año.'],
              () => { }
            );
          }
          if (!existingPais.includes('Japó')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['Japó', '123,9M', '125,2M', '126,8M', '377k', 9.9, 1.55, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', 'Japón es un país insular que se extiende a lo largo de la costa Pacífica del nordeste de Asia. La isla principal es Honshu, y las otras tres más grandes son Hokkaido, en el norte del país, y Shikoku y Kyushu en el sur. Más de 4.000 pequeñas islas rodean a estas cuatro principales. Las islas principales están conectadas mediante un moderno sistema de transporte, del que forma parte el túnel Seikan, el mayor túnel ferroviario del mundo, con una longitud de 54 kilómetros. Los trenes japoneses de alta velocidad (conocidos como shinkansen, o trenes-bala) enlazan las principales regiones del país. Aproximadamente un 73 por ciento del territorio japonés es montañoso, y todas las ciudades importantes, excepto la antigua capital de Kyoto, se ubican en torno a una estrecha franja de llanuras costeras. Apenas un 18 por ciento del territorio es habitable, por lo que las ciudades japonesas son grandes urbes densamente pobladas. El área metropolitana de Tokyo es el mayor núcleo urbano del planeta. En él viven 36 millones de personas, pese al inquietante historial geológico de la región, donde son frecuentes terremotos y tsunamis de gran poder destructivo. Solamente el gran terremoto de 1923 acabó con unas 143.000 vidas.'],
              () => { }
            );
          }
          if (!existingPais.includes('EEUU')) {
            tx.executeSql(
              "insert into items (pais, poblacio_2022, poblacio_2020, poblacio_2000, area, index_de_creixement, poblacio_mundial, bandera, descripcio) values (?,?,?,?,?,?,?,?,?)",
              ['EEUU', '338,2M', '335,9M', '282,3M', '9.372k', 1.1, 4.24, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png', 'Los Estados Unidos es el tercer país más grande del mundo en cuanto a su población y el cuarto más grande en superficie. Está compuesto por 50 estados cuya capital es Washington distrito federal, D.F. En la corta historia desde su fundación hace 200 años, los Estados Unidos han alcanzado un desarrollo notable en muchas áreas. El país es uno de los más avanzados en los campos de la economía, la ciencia, la tecnología de información, la medicina, la política, y el ocio. Quizás los avances producidos en el campo de ocio, ha contribuido a que los Estados Unidos sea el destino más elegido por los estudiantes extranjeros a la hora de realizar sus estudios. La sociedad de los Estados Unidos, es una sociedad urbana, con más del 75 % de la población viviendo en ciudades y con quizás el 50 % de la población total que vive en la periferia de las ciudades. Las poblaciones de minoría étnica de mayor representación se encuentran en este orden: afro-americanos el 13 % seguidos por los hispanos, 12 %. Los asiáticos suponen aproximadamente el 4 % de la población. El concepto Manifest Desteny, que es la creencia de que América se expandiría más allá del océano Pacífico, ha influido enormemente en su carácter. El espíritu fronterizo del siglo XIX, con un espacio abierto hacia el oeste permitiendo la expansión, ha dado forma a el carácter independiente y fuerte de muchos americanos.Los inmigrantes, muchos que han huido de la persecución que sufrían en su país de origen, llegaron en EEUU con el entusiasmo y con el compromiso de mejorar su modo de vida.'],
              () => { }
            );
          }
          tx.executeSql('select * from items ORDER BY poblacio_mundial DESC', [], (_, { rows }) =>
            this.setState({ items: rows._array })
          );
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
            stickyHeaderIndices={[0]}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.toggleExpand(item)}>
                <View style={styles.row}>
                  <Text style={styles.cell}>{item.pais}</Text>
                  <Text style={styles.cell}>{item.poblacio_2022}</Text>
                  <Text style={styles.cell}>{item.poblacio_2020}</Text>
                  <Text style={styles.cell}>{item.poblacio_2000}</Text>
                  <Text style={styles.cell}>{item.area}</Text>
                  <Text style={styles.cell}>{item.index_de_creixement}</Text>
                  <Text style={styles.cell}>{item.poblacio_mundial}</Text>
                </View>
                {expandedItem && expandedItem.id === item.id ? (
                  <View style={styles.expanded}>
                    <Image source={{ uri: item.bandera }} 
                          style={{
                            width: 80,
                            height: 50,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2},
                            shadowOpacity: 1,
                            shadowRadius: 2
                          }} />
                    <Text style={styles.cell}>{item.descripcio}</Text>
                  </View>
                ) : null}
              </TouchableOpacity>
            )}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Pais</Text>
                <Text style={styles.headerText}>2022</Text>
                <Text style={styles.headerText}>2020</Text>
                <Text style={styles.headerText}>2000</Text>
                <Text style={styles.headerText}>Area(km2)</Text>
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
    backgroundColor: '#f2f2f',
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

export default TaulaPobresa;