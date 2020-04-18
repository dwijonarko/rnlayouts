import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Input, Image,ListItem,Badge,withBadge} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '../components/Footer';
const FoodScreen = () => {
    const image='https://cdn.pixabay.com/photo/2019/11/19/13/10/clementine-4637398_960_720.jpg';
    const image1='https://cdn.pixabay.com/photo/2012/12/13/11/48/slice-69745_960_720.jpg';
    const image2='https://cdn.pixabay.com/photo/2016/04/17/12/10/american-1334633_960_720.jpg';
    const list = [
      {
        name: 'Pizza Frenzy',
        avatar_url: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg',
        subtitle: 'Delicious Italian Pizza'
      },
      {
        name: 'Friend Chicken',
        avatar_url: 'https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863_960_720.jpg',
        subtitle: 'Best Fried Chicken in town'
      },
      {
        name: 'Big Burger',
        avatar_url: 'https://cdn.pixabay.com/photo/2020/03/25/16/23/burger-4967868_960_720.jpg',
        subtitle: 'Stunning Big Burger'
      },
      {
        name: 'Spaghheti and Pasta',
        avatar_url: 'https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg',
        subtitle: 'Spaggheti and Pasta'
      },
    ];
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pick Foods</Text>
        <Text style={styles.subTitle}>For you</Text>
      </View>
      <View style={styles.textBar}>
        <View
          style={styles.findInput}>
          <Input
            placeholder="Pick a restaurant"
            leftIcon={<Icon name="search" size={20} color="#cecece" />}
          />
        </View>
        <View
          style={styles.cameraBox}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Icon name="camera" size={24} color="#cecece" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={{marginTop:20,fontFamily:'Montserrat-Light'}}>Your Last Orders</Text>
      </View>
      <View style={styles.imageBox}>
        <View>
        <Image
          source={{uri: image}}
          borderRadius={20}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
         <Badge
            value={<Icon name="star" color="#ffffff" style={{padding:5}} solid />}
            status="success"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            badgeStyle={[styles.badge,styles.badgeColorBlue]}

          />
        </View>
        <View>
        <Image
          source={{uri: image1}}
          borderRadius={20}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Badge
            value={<Icon name="arrow-up" color="#ffffff" style={{padding:5}} solid />}
            status="primary"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
            badgeStyle={[styles.badge,styles.badgeColorYellow]}

          />
        </View>
        <View>
        <Image
          source={{uri: image2}}
          borderRadius={20}

          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
         <Badge
            badgeStyle={[styles.badge,styles.badgeColorPink]}
            value={<Icon name="map-marker" color="#ffffff" style={{padding:5}} solid />}
            status="primary"
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
          />
        </View>
      </View>
      <View style={{flex: 4, flexDirection: 'column'}} >
      <View style={styles.header}>
      <Text style={{marginTop:20,fontFamily:'Montserrat-Light'}}>Restaurants near you</Text>

      </View>
      <SafeAreaView>
      {
        list.map((l, i) => (
          <ListItem
            key={i}
            leftAvatar={{ source: { uri: l.avatar_url } }}
            title={l.name}
            subtitle={l.subtitle}
            bottomDivider
            chevron={{ color: 'pink' }}
          />
        ))
      }
    </SafeAreaView>
    </View>
    < Footer />
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Roboto-Black',
    fontSize: 20,
  },
  subTitle: {
    fontFamily: 'Roboto-Light',
    fontSize: 18,
  },
  textBar:{flex: 1, flexDirection: 'row', marginHorizontal: 20},
  findInput:{
    flex: 4,
    marginRight: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cameraBox:{
    // flex: 1,
    // flexDirection: 'column',
    width:56,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageBox:{flex: 2, flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:20},
  image:{width: 100, height: 160, overflow: "hidden",borderWidth:5,borderColor:'white'},
  badge:{borderWidth:3,height:40,width:40,borderRadius:20},
  badgeColorPink:{backgroundColor:'pink'},
  badgeColorBlue:{backgroundColor:'#80d8ff'},
  badgeColorYellow:{backgroundColor:'#fdd835'}
});
