import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Courses from '../screens/Course';
import Subjects from '../screens/Subjects';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Subjects" component={Subjects} />
    </Tab.Navigator>
  );
}
