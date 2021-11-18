import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from './onBoarding/Slider';
import SignIn from './onBoarding/SignIn';
import SignUp from './onBoarding/SignUp';
import VerificationScreen from './onBoarding/VerificationScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import COLORS from './assets/colors/colors';
import { Provider } from 'react-redux';
import store from './store';
import { CartContext, CartProvider } from './context/CartContext';


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
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'ios-receipt' : 'ios-receipt-outline';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: 'gray'
      })}
    >

      <Tab.Screen name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Order"
        component={OrderScreen}
        options={{ headerShown: false }}
      />

      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  )
}



export default function App() {

  return (

    <CartProvider>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Slider"
            component={Slider}
            options={{
              title: 'Awesome app',
            }}
          />
          <Stack.Screen
            name="Home"
            component={bottomNavigation}
            options={{
              title: 'Awesome app',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'SignUp',
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: 'SignIn',
            }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>

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
