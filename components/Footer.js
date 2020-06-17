import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const heart = <Icon name="heart" size={13} color="#FE6869" solid />;
const Footer = () => {
    return (
        <View style={styles.footer}>
        <Text style={styles.footerText}>Build with {heart} by @dwijonarko</Text>
    </View>
    )
}
const styles = StyleSheet.create({
  footer: {
    // position: 'absolute',
    backgroundColor:'#f5f5f5',
    bottom:0,
    width:'100%',
    alignItems:"center"
  },
  footerText:{
    marginTop:10,
    color:'grey',
    textAlign:"center",
    fontSize:15
  },
});
export default Footer
