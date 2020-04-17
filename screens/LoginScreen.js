import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const facebook = <Icon name="facebook" size={20} color="#ffffff" />;
const google = <Icon name="google" size={20} color="#ffffff" />;
const twitter = <Icon name="twitter" size={20} color="#ffffff" />; 
const github = <Icon name="github" size={20} color="#ffffff" />;
const heart = <Icon name="heart" size={13} color="#FE6869" solid />;
const LoginScreen = ({navigation}) => {
  return (
    <LinearGradient style={styles.container}  colors={['#FE6869', '#FD6867']}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Log In</Text>
        <Text style={styles.subTitleText}>Welcome back</Text>
      </View>
      <View style={styles.body} >
        <View style={styles.textBox}>
          <TextInput style={styles.textInput} placeholder="Email or Username" />
          <TextInput style={styles.textInput} placeholder="Password" />
        </View>
        <View style={styles.centerBox}>
        <TouchableOpacity style={styles.buttonSkyBlue} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
        </View>
        <View style={styles.centerBox}>
          <Text  style={{color:'grey'}}>Login with social media</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:20}}>
              <TouchableOpacity style={styles.buttonBlue}>
                 <Text style={styles.buttonText}>{facebook} Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRed}>
                <Text style={styles.buttonText}>{google} Google</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:0}}>
              <TouchableOpacity style={styles.buttonLightBlue}>
                <Text style={styles.buttonText}>{twitter} Twitter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonGrey}>
                <Text style={styles.buttonText}> {github} Github</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
    <View style={styles.footer}>
        <Text style={styles.footerText}>Build with {heart} by @dwijonarko</Text>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  body: {
    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  footer: {
    position: 'absolute',
    bottom:0,
    width:'100%',
    alignItems:"center"
  },
  footerText:{
    color:'grey',
    textAlign:"center",
    fontSize:15
  },
  titleText: {
    color: 'white',
    fontSize: 60,
    fontFamily:'Montserrat-Thin'
  },
  subTitleText: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'sans-serif-thin',
  },
  textBox:{
    borderRadius:10,
  },
  textInput:{
    marginHorizontal:20,
    borderBottomWidth:1,
    borderBottomColor:'lightgrey'
  },
  centerBox:{alignItems:"center",paddingVertical:20},
  forgotPasswordText:{color:'grey',textDecorationLine:'underline',marginTop:20},
  buttonBlue:{backgroundColor:"#2979ff",paddingVertical:10,marginHorizontal:25,borderRadius:15,minWidth:120,alignItems:"center"},
  buttonLightBlue:{backgroundColor:"#40c4ff",paddingVertical:10,marginHorizontal:25,borderRadius:15,minWidth:120,alignItems:"center"},
  buttonSkyBlue:{backgroundColor:"#42a5f5",paddingVertical:10,marginHorizontal:25,borderRadius:15,width:'100%',alignItems:"center"},
  buttonRed:{backgroundColor:"#ff1744",paddingVertical:10,marginHorizontal:25,borderRadius:15,minWidth:120,alignItems:"center"},
  buttonGrey:{backgroundColor:"#757575",paddingVertical:10,marginHorizontal:25,borderRadius:15,minWidth:120,alignItems:"center"},
  buttonText:{color:'white',fontWeight:"bold",fontSize:16}
});

export default LoginScreen;
