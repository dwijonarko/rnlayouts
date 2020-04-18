import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header, Avatar, ListItem} from 'react-native-elements';
import Footer from '../components/Footer';
const HomeScreen = ({navigation}) => {
  const list = [
    {
      title: 'Mobile Application',
      icon: 'android',
    },
    {
      title: 'Web Application',
      icon: 'web',
    },
    {
      title: 'Landing Page',
      icon: 'flight-takeoff',
    },
    {
      title: 'Poster',
      icon: 'palette',
    },
    {
      title: 'Logo',
      icon: 'pages',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#FE6869', '#FD6867']}
        style={styles.linearGradient}>
        
        <View style={styles.avatarBox}>
          <View style={styles.avatarBorder}>
            <Avatar
              size="large"
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.infoBox}>
        <View style={styles.info}>
          <View style={[styles.infoText, styles.infoTextLeft]}>
            <Text style={styles.infoTitle}>183</Text>
            <Text style={styles.infoSubTitle}>shoots</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>9778</Text>
            <Text style={styles.infoSubTitle}>followers</Text>
          </View>
          <View style={[styles.infoText, styles.infoTextRight]}>
            <Text style={styles.infoTitle}>100</Text>
            <Text style={styles.infoSubTitle}>projects</Text>
          </View>
        </View>
        <View
          style={styles.listItem}>
          {list.map((item, i) => (
            <ListItem
              titleStyle={styles.listItemTitle}
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              bottomDivider
              chevron={{color: '#FE6869'}}
              onPress={()=>navigation.navigate('Food')}
            />
          ))}
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
};

export default HomeScreen;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  header: {
    backgroundColor: '#FE6869',
    justifyContent: 'space-around',
    borderBottomColor: '#FD6867',
  },
  avatarBox: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  avatarBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#fefefe',
    borderRadius: 100,
  },
  info: {
    minHeight: 40,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'space-between',
   
  },
  infoText: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  infoTextLeft: {
    borderRightWidth: 1,
    borderRightColor: '#cecece',
  },
  infoTextRight: {
    borderLeftWidth: 1,
    borderLeftColor: '#cecece',
  },
  infoBox: {flex: 2, marginVertical: 20, alignItems: 'center'},
  infoTitle: {fontSize: 26, fontWeight: 'bold', color: 'grey'},
  infoSubTitle:{fontSize: 10, color: 'grey'},
  listItem:{marginVertical: 20, paddingHorizontal: 10, width: '100%'},
  listItemTitle:{color: '#ff8a65', fontWeight: 'bold'}
});
