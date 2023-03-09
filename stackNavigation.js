import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import Tabla1 from './app/views/taula1';
import Taulas from "./app/views/Taulas";
import PovertyTable from "./app/views/taula1";
import povertyData from "./assets/tabla1.json";

const Stack = createStackNavigator();

function Tables(){
    return (
                <Stack.Navigator>
                    <Stack.Screen name="Taulas" component={Taulas} />
                    <Stack.Screen name="Taula1" component={() => <PovertyTable data={povertyData} />} />
                </Stack.Navigator>
    );
}

export default Tables;