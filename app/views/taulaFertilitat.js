import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';

export class TaulaFertilitat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items3: [],
      expanded: false,
      expandedItem: {},
    };
  }

  componentDidMount() {
    const db = SQLite.openDatabase('pobresa.db');
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items3 (id integer primary key not null, pais text, any1971 double, any1981 double, any1991 double, any2001 double, any2011 double, any2019 double, any2020 double, bandera text, descripcio text);'
      );
  
      tx.executeSql(
        'select * from items3 where pais in (?,?,?,?,?,?,?,?,?,?)',
        ['Rusia', 'Colombia', 'Rumania', 'Uruguay', 'Chile', 'Reino Unido', 'Turquia', 'Somalia', 'Kenia', 'Camboya'],
        (_, { rows }) => {
          const existingPais = rows._array.map(item3 => item3.pais);
          if (!existingPais.includes('Rusia')) {
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Rusia', 2.03, 1.91, 1.73, 1.22, 1.58, 1.5, 1.51, 'https://www.banderas-mundo.es/data/flags/w580/ru.png', 'Rusia es el país que limita con mayor número de países, un total de dieciséis y el que tiene las fronteras más extensas. Tiene límites de aguas territoriales con varios de los anteriores, con Japón y con los Estados Unidos (en concreto, con el estado de Alaska). Limita también con los estados de reconocimiento limitado Abjasia, Osetia del Sur y la Unión de Repúblicas Populares (Nueva Rusia). Las costas de Rusia están bañadas por el océano Ártico, el norte del océano Pacífico y mares interiores como el Báltico, el Negro y el Caspio. La historia de Rusia comienza con los eslavos orientales. Los eslavos emergieron como un grupo reconocible en Europa entre los siglos III y VIII d. C..Fue fundado y dirigido por una clase guerrera noble de vikingos (llamados varegos) y sus descendientes. El primer estado de los eslavos orientales, la Rus de Kiev, surgió en el siglo IX y en el año 988 adoptó el cristianismo ortodoxo, producto de la cristianización levada a cabo por Cirilo y Metodio, enviados desde el Imperio bizantino. Comenzó entonces una síntesis de las culturas bizantina y eslava que definiría la rusa durante el siguiente milenio.​ Más tarde, la Rus de Kiev se desintegró en muchos pequeños estados feudales, de los cuales el más poderoso fue el Principado de Moscú, que se convirtió en la fuerza principal en el proceso de la reunificación rusa y la lucha por la independencia contra la Horda de Oro.'],
              () => {}
            );
          }
          if (!existingPais.includes('Colombia')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Colombia', 5.06, 3.73, 3.05, 2.52, 1.96, 1.79, 1.77, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png','La Republica de Colombia más conocida como Colombia, es un país soberano situado en la región noroccidental de América del Sur, bordeando el Mar Caribe, entre Panamá y Venezuela, y bordeando el Océano Pacífico, entre Ecuador y Panamá. De acuerdo con su constitución política es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general.Tiene una extensión territorial de 1.141.748 Km2 y forman parte de Colombia, además del territorio continental, el archipiélago de San Andrés, Providencia y Santa Catalina, el Rosario y San Bernardo, en el Caribe (Atlántico); y las islas de Gorgona, Gorgonilla y Malpelo, en el Pacífico. Está dividida político y administrativamente por 32 Departamentos, compuestos por 1101 Municipios y 20 Áreas no municipalizadas.'],
              () => {}
            );
          }
          if (!existingPais.includes('Rumania')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Rumania', 2.67, 2.36, 1.59, 1.27, 1.47, 1.77, 1.6, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1280px-Flag_of_Romania.svg.png', 'Rumania es un país europeo que se ubica al este del continente, compartiendo sus límites geográficos con Hungría, Serbia, Ucrania, Moldavia y Bulgaria. La capital de Rumania es la fabulosa ciudad de Bucarest y el idioma oficial de este país es el rumano, una lengua indoeuropea. Rumania cuenta con una superficie de más de 238 mil kilómetros cuadrados, mientras que su población es cercana a los 22 millones. Hoy en día, Rumania posee un sistema de gobierno republicano y democrático en el que encontramos a la figura del presidente y del primer ministro. Como sucede con todos los países de la Europa del Este, la historia de Rumania es una historia muy rica y compleja que incluye la presencia sucesiva de numerosas tribus así como también numerosas formas de gobierno y sistemas políticos que han ido cambiando con el tiempo desde los primeros registros escritos que se encuentran de esta zona (cerca del año 400 antes de Cristo) hasta la actualidad. Durante la Edad Media, los reinados de Valaquia, Moldavia y Transilvania fueron los que dominaron la región, pero este dominio cambiaría al pasar los años y los siglos. Otra de las épocas importantes de Rumania fue cuando la región pasó a ser parte de la Unión de Repúblicas Socialistas Soviéticas o U.R.S.S.'],
              () => {}
            );
          }
          if (!existingPais.includes('Uruguay')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Uruguay', 2.94, 2.67, 2.51, 2.21, 2.01, 1.96, 1.95, 'https://img.asmedia.epimg.net/resizer/mg_bi13Ow9oSK69XprBoIyx7Hus=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/34NR24OZLBEZRHR32YSUAQO62A.png', 'Llamada oficialmente República Oriental del Uruguay, esta nación suramericana de la región sur del subcontinente es un estado soberano de régimen presidencialista y democrático, célebre por su pequeño tamaño y su poca población, que le permiten estándares de vida mucho más controlados que los de sus vecinos más voluminosos. País fundador de instituciones internacionales como la ONU, OEA, UNASUR y otros, se trata de uno de los de mayor equitatividad en la distribución de la riqueza de todo el continente (junto con Costa Rica), el de mayor índice de alfabetización y menor índice de percepción de corrupción, y uno de los tres con mayor índice de desarrollo humano de toda la región. Muchas publicaciones lo ubican entre los países más seguros, verdes y democráticos del mundo, así como el más pacífico del continente, por lo que a menudo se lo denomina la “Suiza de América”, para hacer alusión a su neutralidad en conflictos regionales. Sin embargo, se conoce de la crisis económica sostenida que la nación atravesó durante la entrada del siglo XXI, así como la dictadura militar que gobernó el país entre 1973 y 1985.'],
              () => {}
            );
          }
          if (!existingPais.includes('Chile')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Chile', 3.65, 2.69, 2.56, 2.01, 1.87, 1.63, 1.61, 'https://www.banderasphonline.com/wp-content/uploads/2020/05/comprar-bandera-chile-para-mastil-exterior-interior-1200x798.png', 'La República de Chile es un país ubicado en América del Sur. Limita hacia el este con Argentina, al norte con Perú y al noroeste con Bolivia. Hacia su oeste se encuentra el Océano Pacífico. Chile es un país angosto pero bastante extenso en longitud: tiene un ancho máximo de 117km y su extensión es de 4270 km. El origen de su nombre procede de un término que se utilizaba antes de la conquista. En ese entonces, las zonas ubicadas particularmente en el desierto de Atacama, recibían el nombre de “chili”. Una vez que los españoles conquistaron las tierras chilenas, continuaron utilizando este mismo nombre al que a menudo se nombraba como “valle de chile”. Fue recién en el año 1824 que el gobernador Ramón Freire decretó el nombre del país aunque éste se consideró emancipado de los españoles el 12 de febrero de 1818 de la mano del Bernardo O Higgins y José de San Martín.'],
              () => {}
            );
          }
          if (!existingPais.includes('Reino Unido')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Reino Unido', 2.41, 1.82, 1.82, 1.63, 1.91, 1.63, 1.56, 'https://turismo.org/wp-content/uploads/2010/09/Bandera-del-Reino-Unido-760x400.png', 'El Reino Unido de Gran Bretaña e Irlanda del Norte es un país soberano compuesto por cuatro naciones. Su forma de gobierno es la monarquía constitucional. Geográficamente ocupa la isla de Gran Bretaña y parte de la isla de Irlanda, además de pequeñas islas cercanas. Además, cuenta con 14 territorios de ultramar. Su economía es una de las más poderosas del mundo, incluso después del declive de su imperio a mediados del siglo XX. Desde el siglo XV y hasta la actualidad ha influido en el destino de muchas otras naciones. Su nación más antigua, Inglaterra, fue fundada en el siglo X, por lo que su cultura encuentra raíces antiguas que se combinan y fusionan con la moderna actualidad de sus ciudades cosmopolitas.'],
              () => {}
            );
          }
          if (!existingPais.includes('Turquia')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Turquia', 5.53, 4.28, 3.02, 2.45, 2.14, 2.06, 2.04, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png', 'Turquía lleva ya varios años entre los 10 países más populares para pasar las vacaciones, y no es para menos. Pocos países son tan sorprendentes y versátiles como Turquía. Además, Turquía tiene unos 300 días de sol al año, hermosas playas, bellos paisajes, una rica cultura, ciudades antiguas, gente hospitalaria y amable y multitud de tradiciones. Turquía tiene algo para todo el mundo. Turquía está situada tanto en Europa como en Asia. En parte debido a su ubicación, religiones y tradiciones, Turquía es un país muy diferente a España. Es importante que, si va a ir de vacaciones o a hacer negocios en este país, también tenga en cuenta las leyes, reglas, normas y valores de los turcos. Con la información de esta página queremos prepararle lo mejor posible para su viaje y estancia en Turquía. Turquía solía consistir en la península de Anatolia (la actual parte asiática de Turquía) y Tracia (la actual parte europea de Turquía). Turquía ha estado habitada por distintos grupos de personas, como los bizantinos, los selyúcidas y los otomanos, lo que confiere al país una rica historia cultural y antiguas tradiciones.'],
              () => {}
            );
          }
          if (!existingPais.includes('Somalia')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Somalia', 7.15, 7.03, 7.46, 7.58, 6.77, 5.98, 5.89, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1200px-Flag_of_Somalia.svg.png', 'La historia del actual territorio de Somalia se remonta a la antigüedad, cuando la región fue conocida por los antiguos egipcios. Entre el siglo II y el siglo VII de nuestra era, varias partes del territorio fueron incluidas en el reinado etíope de Aksum. Poco tiempo después, ciertas tribus árabes se instalaron a lo largo de la costa del golfo de Adén y fundaron allí un sultanato centrado en el puerto de Zeila. Al mismo tiempo, el país se islamizó debido a la influencia de chiitas llegados de Irán. De todas formas, los habitantes conservaron sus lenguas ancestrales en lugar de adoptar el árabe. A partir del siglo XIII, somalíes y pastores nómadas instalados en el norte del cuerno de África comenzaron a emigrar hacia la región actual de Somalia. Anteriormente los oromo, pastores-agricultores, habían iniciado una migración hacia el Ogadén y la llanura abisinia. Todos estos pueblos se instalaron definitivamente en el territorio. Algunos pueblos árabes intentaron apropiarse del territorio y muchos somalíes fueron desplazándose hacia el exterior, sobre todo hacia Etiopía.'],
              () => {}
            );
          }
          if (!existingPais.includes('Kenia')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Kenia', 8.05, 7.37, 5.9, 5.11, 4.25, 3.42, 3.37, 'https://www.banderas-mundo.es/data/flags/w580/ke.png', 'El nombre del país se debe al monte Kenia, un lugar tradicional del país y la segunda montaña más alta de África. Kenia también es conocida por su biodiversidad. Geográficamente, Kenia se divide en varias áreas con una demografía muy variable, existiendo zonas de sabanas, áridas y semiáridas, además de una gran costa con el océano Índico. Las regiones centrales y el occidente tienen bosques y montañas, mientras que las regiones del norte son más áridas. Como parte del Este de África, Kenia ha sido hogar del hombre desde el Paleolítico Inferior. La expansión bantú alcanzó el área en el primer milenio antes de nuestra era, y los límites del estado moderno comprenden los pasos de las áreas lingüísticas y culturales del Nilo-Sahariana, la afro-asiática y la bantú, por lo que Kenia ha sido un país multiétnico desde sus orígenes. La presencia europea y árabe en Mombasa se remonta a los principios de la Edad Moderna, pero la exploración del interior comenzó en el siglo XIX. El Imperio británico estableció el Protectorado del Este de África en 1895, conocido como la Colonia de Kenia desde 1920. La República Independiente de Kenia se estableció en 1963.'],
              () => {}
            );
          }
          if (!existingPais.includes('Camboya')){
            tx.executeSql(
              "insert into items3 (pais, any1971, any1981, any1991, any2001, any2011, any2019, any2020, bandera, descripcio) values (?,?,?,?,?,?,?,?,?,?,?)",
              ['Camboya', 6.33, 6.04, 5.42, 3.65, 2.8, 2.48, 2.45, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2560px-Flag_of_Cambodia.svg.png', 'Camboya, situada en Asia sudoriental, tiene una superficie de 181.040 Km2. Camboya, con una población de 16.589.023 personas, se encuentra en la posición 73 de la tabla de población, compuesta por 196 países y presenta una moderada densidad de población, 92 habitantes por Km2. Su capital es Nom Pen y su moneda Rieles camboyanos. Camboya es la economía número 109 por volumen de PIB. Su deuda pública en 2020 fue de 7.762 millones de euros, con una deuda del 35,17% del PIB. Su deuda per cápita es de 473 € euros por habitante. Hay algunas variables que pueden ayudarle a conocer algo más si va a viajar a Camboya o simplemente quiere saber más sobre el nivel de vida de sus habitantes.'],
              () => {}
            );
          }
           else {
            // El dato ya existe, no es necesario insertarlo
            tx.executeSql('select * from items3 order by any2020 DESC', [], (_, { rows }) =>
              this.setState({ items3: rows._array })
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
    if (this.state.items3.length === 0) {
      return (
        <View style={styles.container}>
          <Text>Cargando...</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.items3}
            stickyHeaderIndices={[0]}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.toggleExpand(item)}>
              <View style={styles.row}>
                <Text style={styles.cell}>{item.pais}</Text>
                <Text style={styles.cell}>{item.any1971}</Text>
                <Text style={styles.cell}>{item.any1981}</Text>
                <Text style={styles.cell}>{item.any1991}</Text>
                <Text style={styles.cell}>{item.any2001}</Text>
                <Text style={styles.cell}>{item.any2011}</Text>
                <Text style={styles.cell}>{item.any2019}</Text>
                <Text style={styles.cell}>{item.any2020}</Text>
              </View>
                {expandedItem && expandedItem.id === item.id ? (
              <View style={styles.expanded}>
                <Image source={{ uri: item.bandera }} style={{ width: 80, height: 50 }} />
                <Text style={styles.cell}>{item.descripcio}</Text>
              </View>
              ) : null}
              </TouchableOpacity>
            )}
            ListHeaderComponent={() => (
              <View style={styles.header}>
                <Text style={styles.headerText}>Pais</Text>
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

export default TaulaFertilitat;