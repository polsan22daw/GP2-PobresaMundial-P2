import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text
                style={{
                fontSize: 33,
                textAlign: 'center',
                marginTop: "20%"
                }}
            >About Us</Text>
            <Text
                style={{
                fontSize: 18,
                textAlign: 'justify',
                marginTop: "5%",
                marginLeft: "10%",
                marginRight: "10%"
                }}
                >
                Els desenvolupadors d'aquest lloc web som Marc Pedemonte, Pol Sanz i Angel Torres. Som estudiants de DAW2, ens han 
                demanat realitzar un projecte en comú utilitzant el framework d’Angular per desenvolupar. Aquest lloc web consisteix 
                en mostrar gràficament dades de països de tot el món mitjançant taules amb dades o bé gràfics que permeten visualitzar 
                millor les diferencies entre països.
                </Text>
        </View>
    );
};

export default Home;