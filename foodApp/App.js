import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

const bottomNavigation = () => {


  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'ios-list' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >

      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Order"
        component={OrderScreen}
        options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}



export default function App() {









  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"

        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={bottomNavigation}
          options={{
            title: 'Awesome app',
          }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{
            title: 'My profile',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
