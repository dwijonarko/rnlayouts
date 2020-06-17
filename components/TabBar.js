import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { Icon } from 'react-native-elements'

function TabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
        justifyContent:"space-around"
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconName =
          route.name === 'Home'
            ? 'home'
            : route.name === 'Food'
            ? 'glass'
            : 'cog';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              backgroundColor: 'lightgrey',
              borderColor: 'white',
              height: 40,
              width: 40,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: 20,
              zIndex:-1000
            }}>
            <Icon name={iconName} size={20} color={isFocused ? 'grey' : '#FE6869'} type="font-awesome" raised={isFocused ? false : true} />
            {/* <Text style={{color: isFocused ? 'red' : 'blue'}}>{label}</Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;