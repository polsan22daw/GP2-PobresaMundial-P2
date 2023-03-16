import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Home = () => {
    return (
        <View
            style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff"
            }}
        >
            <Image
                style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                transform: [{rotate: '180deg'}]
                }}
                source={Url = {uri: 'https://www.todofondos.net/wp-content/uploads/fondo-de-pantalla-azul-marino-576x1024.jpg'}}
            />
            <Image
                style={{
                width: "55%",
                height: "17%",
                marginTop: "2%",
                borderRadius: 10,
                }}
                source={require('../../assets/Logo-Web.jpg')}

            />
            <Text
                style={{
                fontSize: 33,
                textAlign: 'center',
                marginTop: "20%",
                color: "white",
                fontWeight: "bold",
                }}
            >About Us</Text>
            <Text
                style={{
                fontSize: 18,
                textAlign: 'center',
                marginTop: "5%",
                marginLeft: "10%",
                marginRight: "10%",
                color: "white",
                
                }}
                >
                Els desenvolupadors d'aquesta aplicació som Marc Pedemonte, Pol Sanz i Angel Torres. Som estudiants de DAW2, ens han demanat realitzar un projecte en comú utilitzant React-Native. Aquesta aplicació consisteix en mostrar taules, comparant diferents dades de diferents països, com per exemple la població, ferilitat o esperança de vida.
                </Text>
        </View>
    );
};

export default Home;