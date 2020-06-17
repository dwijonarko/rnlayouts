import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const HomeTitle = () => {
  return (
    <View style={styles.navbarContainer}>
      <Icon raised name="home" type="font-awesome" color="#ffffff" size={18} />
      <View style={styles.navbar}>
        <Text style={styles.titlebar}>dwijonarko</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {flexDirection: 'row'},
  navbar: {flex: 1, flexDirection: 'row', paddingHorizontal: 10},
  titlebar: {
    marginLeft: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeTitle;
