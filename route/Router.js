import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FoodScreen from '../screens/FoodScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Text,View} from 'react-native';
const Stack = createStackNavigator();
function LogoTitle() {
  return (
    <View style={{flexDirection:'row'}}>
      <Icon raised name="home" type="font-awesome" color="#ffffff" size={18} />
      <View style={{flex:1,flexDirection:'row',paddingHorizontal:10}}>
            <Text style={{marginLeft:5,textAlign:'center',fontSize:16,fontWeight:'bold',color:'#ffffff'}}>dwijonarko</Text>
      </View>
    </View>
  );
}
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'My home',
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#FE6869',
            },
          }}
        />
         <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{
            headerShown:false,
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
    </NavigationContainer>
  );
}

export default Router;
