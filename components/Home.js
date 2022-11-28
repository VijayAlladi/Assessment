import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');

export default function Home() {
  const DATA = [
    {
      id: 1,
      name: 'Trending Players',
      position: 'Medicine Specialist',
      image: 'https://p.imgci.com/db/PICTURES/CMS/305300/305330.jpg',
    },
    {
      id: 2,
      name: 'Trending Sports',
      position: 'Dentist Specialist',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdircJie_T9skbjbCdfN7A9z3wpBp8Ub2zw&usqp=CAU',
    },
    {
      id: 3,
      name: 'Top Coaches',
      position: 'Cancer Specialist',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFiaSGs3KyZfZNOE_LsTIZ7yef87uvDvegg&usqp=CAU',
    },
    {
      id: 4,
      name: 'Top Players',
      position: 'Cardiology Specialist',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0U88A6IfpVq1lAQMr8tLBkotr2BcRa-ssYg&usqp=CAU',
    },
    {
      id: 5,
      name: 'Best Captains',
      position: 'Medicine Specialist',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zsKDbFneDT2Hxe9BDPjEpk7-gzmdPaniLw&usqp=CAU',
    },
  ];
  const calls = [
    {
      id: 1,
      name: 'Mark Doe',
      game: 'cricket',
      image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
    },
    {
      id: 2,
      name: 'Clark Man',
      game: 'football',
      image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
    },
    {
      id: 3,
      name: 'Jaden Boor',
      game: 'cricket',
      image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
    },
    {
      id: 4,
      name: 'Srick Tree',
      game: 'basket ball',
      image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
    {
      id: 5,
      name: 'Erick Doe',
      game: 'hockey',
      image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
    },
  ];
  const images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
    //require('./assets/images/girl.jpg'), // Local image
  ];
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          position: 'absolute',
          display: 'flex',
          marginRight: 40,
          flexDirection: 'row',
        }}></View> */}
      <View
        style={{
          display: 'flex',
          position: 'relative',
          backgroundColor: 'blue',
          height: (height * 50) / 100 / 2 + 10,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <View>
            <Text style={styles.Text}>
              Welcome To <Text style={{fontWeight: 'bold'}}>BigHit</Text>
            </Text>
            <Text style={styles.Text1}>India's biggest sports platform</Text>
          </View>
          <View style={{}}>
            <TouchableHighlight
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.loginText}>Create Profile</Text>
            </TouchableHighlight>
          </View>
        </View>
        <Swiper
          style={{
            position: 'relative',
            marginLeft: 20,
            borderRadius: 10,
          }}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={60}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={styles.imageBanner}
              resizeMode="contain"
              source={{
                uri: 'https://p.imgci.com/db/PICTURES/CMS/305300/305330.jpg',
              }}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={styles.imageBanner}
              resizeMode="contain"
              source={{
                uri: 'https://www.bighit.fans/assets/images/webSlide8.png',
              }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{position: 'relative', marginTop: 30}}>
        <FlatList
          style={[styles.list, {margin: 20}]}
          contentContainerStyle={styles.listContainer}
          data={DATA}
          horizontal={true}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.box}>
                <Image style={styles.profileImage} source={{uri: item.image}} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
            );
          }}
        />
        <View style={{marginHorizontal: 20}}>
          <Text
            style={{
              color: '#000',
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 5,
              marginLeft: 5,
            }}>
            Top players on BigHit Leaderboard
          </Text>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={calls}
            horizontal={true}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity style={[styles.card]}>
                    <Image
                      style={styles.cardImage}
                      source={{uri: item.image}}
                    />
                  </TouchableOpacity>

                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={[styles.title]}>{item.name}</Text>
                    <Text style={[styles.title]}>{item.game}</Text>
                    {/* </View> */}
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Text: {
    color: '#fff',
    fontSize: 14,
  },
  Text1: {
    color: '#fff',
    fontSize: 12,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: 'white',
    marginVertical: 8,
    marginHorizontal: 12,
    fontSize: 13,
  },
  list: {
    position: 'relative',
  },
  listContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  /******** card **************/
  card: {
    elevation: 2,
    marginVertical: 5,
    //margin: 10,
    backgroundColor: 'white',
    // flexBasis: '42%',
    marginHorizontal: 5,
    borderRadius: 25,
  },

  cardImage: {
    height: 70,
    width: 70,
    borderRadius: 25,
    alignSelf: 'center',
  },
  title: {
    fontSize: 12,
    //flex: 1,
    //alignSelf: 'center',
    color: 'black',
  },

  box: {
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 7,
    elevation: 2,
    borderRadius: 15,
  },
  profileImage: {
    width: 125,
    height: 125,
    marginBottom: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  name: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#000',
  },

  textdata: {
    width: width,
    paddingTop: (height * 15) / 100 / 2 + 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    top: 180,
  },
  imageBanner: {
    width: Dimensions.get('window').width - 40,
    height: (height * 12) / 100,
    borderRadius: 20,
  },
});
