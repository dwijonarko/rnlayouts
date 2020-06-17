import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import HomeTitle from '../components/HomeTitle';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerTitle: props => <HomeTitle {...props} />,
          headerStyle: {
            backgroundColor: '#FE6869',
          },
        }}
      />
      <Stack.Screen
        name="Food"
        component={FoodScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#F3F2F5',
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
