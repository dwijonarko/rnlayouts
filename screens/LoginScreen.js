import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.buttonSkyBlue}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
        </View>
        <View style={styles.centerBox}>
          <Text  style={{color:'grey'}}>Login with social media</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:20}}>
              <TouchableOpacity style={styles.buttonBlue}>
                <Text style={styles.buttonText}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonRed}>
                <Text style={styles.buttonText}>Google</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:0}}>
              <TouchableOpacity style={styles.buttonLightBlue}>
                <Text style={styles.buttonText}>Twitter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonGrey}>
                <Text style={styles.buttonText}>Github</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
    <View style={styles.footer}>
        <Text style={styles.footerText}>Build with love </Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607d8b',
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
    textAlign:"center"
  },
  titleText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
    fontFamily: 'montserrat',
  },
  subTitleText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  textBox:{
    marginTop:35,
    paddingVertical:15,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
