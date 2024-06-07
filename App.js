import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen.js'
import ListScreen from  './screens/ListScreen.js'
import CreateScreen from './screens/CreateScreen.js'
import { StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#a3a3a3',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon:() =>(
            <FontAwesome name='home' size={24} color="black"/>
          ),
        }} />
        <Tab.Screen name="List" component={ListScreen} options={{
          tabBarIcon:() =>(
            <FontAwesome name='list' size={24} color="black"/>
          ),
        }} />
        <Tab.Screen name="Create" component={CreateScreen} options={{
          tabBarIcon:() =>(
            <FontAwesome name='pencil' size={24} color="black"/>
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1e90ff', // Tema de oceanos
  },
});

export default App;
