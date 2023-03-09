import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import Tabla1 from './app/views/taula1';
import Taulas from "./app/views/Taulas";
import PovertyTable from "./app/views/taula1";
import povertyData from "./assets/tabla1.json";
import EspervidaTable from "./app/views/taulaEspervida";
import espervidaData from "./assets/espervida.json";
import FertilitatTable from "./app/views/taulaFertilitat";
import fertilitatData from "./assets/fertilitat.json";

const Stack = createStackNavigator();

function Tables(){
    return (
                <Stack.Navigator>
                    <Stack.Screen name=" " component={Taulas} options={{ headerShown: false }}/>
                    <Stack.Screen name="Pobresa" component={() => <PovertyTable data={povertyData} />} />
                    <Stack.Screen name="Esperança de vida" component={() => <EspervidaTable data={espervidaData} />} />
                    <Stack.Screen name="Fertilitat" component={() => <FertilitatTable data={fertilitatData} />} />
                </Stack.Navigator>
    );
}

export default Tables;