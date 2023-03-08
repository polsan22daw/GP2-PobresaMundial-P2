import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Icon } from 'react-native-elements'

import Home from "./app/views/Home";
import Taulas from "./app/views/Taulas";
import Grafics from "./app/views/Grafics";
import Opcions from "./app/views/Opcions";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
        }}
        />
        <Tab.Screen 
            name="Taules" 
            component={Taulas} 
            options={{
                tabBarLabel: 'Taules',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="table" color={color} size={size}/>
                ),
            }}
        />
        <Tab.Screen 
            name="Grafics" 
            component={Grafics} 
            options={{
                tabBarLabel: 'Grafics',
                tabBarIcon: ({ color, size}) => (
                    <Foundation name="graph-bar" size={24} color={color} />
                ),
            }}
        />
        <Tab.Screen 
            name="Opcions" 
            component={Opcions} 
            options={{
                tabBarLabel: 'Opcions',
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name="options" size={24} color={color} />
                ),
            }}
        />
    </Tab.Navigator>
  );
}

export default function Navigation() {
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
    }