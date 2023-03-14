import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import Tabla1 from './app/views/taula1';
import Taulas from "./app/views/Taulas";
import {TaulaPobresa} from "./app/views/taulaPobresa";
import {TaulaEspervida} from "./app/views/taulaEspervida";
import {TaulaFertilitat} from "./app/views/taulaFertilitat";

const Stack = createStackNavigator();

function Tables(){
    return (
                <Stack.Navigator>
                    <Stack.Screen name=" " component={Taulas} options={{ headerShown: false }}/>
                    <Stack.Screen name="Poblacio" component={TaulaPobresa} />
                    <Stack.Screen name="Esperança de vida" component={TaulaEspervida} />
                    <Stack.Screen name="Fertilitat" component={TaulaFertilitat} />
                </Stack.Navigator>
    );
}

export default Tables;