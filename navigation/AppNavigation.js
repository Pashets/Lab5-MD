import React from 'react';

import PersonalScreen from "../components/Screens/PersonalScreen";
import ChartsScreen from "../components/Screens/ChartsScreen";
import BookScreen from "../components/Screens/BookScreen";
import PictureScreen from "../components/Screens/PictureScreen";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddBook from "../components/Stacks/AddBook";
import BookInfo from "../components/Stacks/BookInfo";

const Stack = createStackNavigator();


const darkGray = "#FFF"
const backColor = "#FFF"

const styleConfig = {
    headerStyle: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#EFEFEF',
    },
    headerTintColor: '#000',
}

const bookStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="BookScreen">
            <Stack.Screen 
                name="BookScreen"
                component={BookScreen}
                options={{ ...styleConfig, title: 'Мої книжки' }}
            />
            <Stack.Screen 
                name="AddBook"
                component={AddBook}
                options={{ ...styleConfig, title: 'Створити книгу' }}
            />
            <Stack.Screen 
                name="BookInfo"
                component={BookInfo}
                options={{ ...styleConfig, title: 'Детальніше' }}
            />
        </Stack.Navigator>
    )
}

const galleryStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="PictureScreen">
            <Stack.Screen
                name="PictureScreen"
                component={PictureScreen}
                options={{ ...styleConfig, title: 'Картинки' }}
            />
        </Stack.Navigator>
    )
}

const creatorStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="PersonalScreen">
            <Stack.Screen
                name="PersonalScreen"
                component={PersonalScreen}
                options={{ ...styleConfig, title: 'Моя Заліковка' }}
            />
        </Stack.Navigator>
    )
}


const chartStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="ChartsScreen">
            <Stack.Screen
                name="ChartsScreen"
                component={ChartsScreen}
                options={{ ...styleConfig, title: 'Рисунки' }}
            />
        </Stack.Navigator>
    )
}



const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{ 
                labelStyle: { paddingBottom: 5 }, 
                style: { borderTopColor: backColor},
                activeTintColor: '#2379DD',
                    activeBackgroundColor: darkGray,
                    inactiveBackgroundColor: darkGray }}>

            <Tab.Screen
                name="General"
                component={creatorStackNavigator}
                options={{
                    tabBarLabel: 'Заліковка',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Charts"
                component={chartStackNavigator}
                options={{
                    tabBarLabel: 'Рисунки',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-scatter-plot" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Books"
                component={bookStackNavigator}
                options={{
                    tabBarLabel: 'Мої книжки',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Pictures"
                component={galleryStackNavigator}
                options={{
                    tabBarLabel: 'Картинки',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="image-filter-hdr" color={color} size={size} />
                    ),
                }}

            />
        </Tab.Navigator>
    );
}
