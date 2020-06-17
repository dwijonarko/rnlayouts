import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import MyTabBar from '../components/TabBar';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Home2" component={HomeScreen}  />
      <Tab.Screen name="Home3" component={HomeScreen}  />
      <Tab.Screen name="Home4" component={HomeScreen}  />
      <Tab.Screen name="Food" component={FoodScreen}  />
    </Tab.Navigator>
  );
}
