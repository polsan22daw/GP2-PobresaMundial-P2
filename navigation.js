import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/views/Home";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tables from "./stackNavigation";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#092a84',
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarStyle: {
                        backgroundColor: '#e2eaff',
                    },
                    headerStyle: {
                        backgroundColor: '#223d89',
                    },
                    headerTitleStyle: {
                        color: '#fff',
                    },
                }}                
            />
                <Tab.Screen
                    name="Taules"
                    component={Tables}
                    options={{
                        tabBarLabel: 'Taules',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="table" color={color} size={size} />
                        ),
                        tabBarStyle: {
                            backgroundColor: '#e2eaff',
                        },
                        headerStyle: {
                            backgroundColor: '#223d89',
                        },
                        headerTitleStyle: {
                            color: '#fff',
                        },
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