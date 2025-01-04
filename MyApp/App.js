import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: true, 
        headerTintColor:'white',
        headerTitle:'UoV Student Care' ,
        headerStyle:{
          backgroundColor:'#4b0150'
        }
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
