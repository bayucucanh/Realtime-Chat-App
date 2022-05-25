/* eslint-disable react-native/no-inline-styles */
import database from '@react-native-firebase/database';
import {Avatar, ListItem, SearchBar} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, FONTS} from '../../themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

// const listData = [
//   {
//     name: 'Amy Farha',
//     avatar_url:
//       'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle: 'Hey there, how are you?',
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url:
//       'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle: 'Where are you?',
//   },
//   {
//     name: 'Jenifar Lawrence',
//     avatar_url:
//       'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
//     subtitle: 'I am good, how are you?',
//   },
//   {
//     name: 'Tom Holland',
//     avatar_url:
//       'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
//     subtitle:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
//   },
//   {
//     name: 'Robert',
//     avatar_url:
//       'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
//     subtitle: 'Where does it come from?',
//   },
//   {
//     name: 'downey junior',
//     avatar_url:
//       'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
//     subtitle: 'Where can I get some?',
//   },
//   {
//     name: 'Ema Watson',
//     avatar_url:
//       'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
//     subtitle: 'I am good, how are you?',
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url:
//       'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle:
//       ' If you use this site regularly and would like to help keep the site',
//   },
//   {
//     name: 'Jenifar Lawrence',
//     avatar_url:
//       'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
//     subtitle: 'Why do we use it?',
//   },
//   {
//     name: 'Tom Holland',
//     avatar_url:
//       'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
//     subtitle:
//       ' If you use this site regularly and would like to help keep the site',
//   },
//   {
//     name: 'Amy Farha',
//     avatar_url:
//       'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle: 'Hey there, how are you?',
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url:
//       'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle: 'Where are you?',
//   },
//   {
//     name: 'Jenifar Lawrence',
//     avatar_url:
//       'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
//     subtitle: 'I am good, how are you?',
//   },
//   {
//     name: 'Tom Holland',
//     avatar_url:
//       'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
//     subtitle:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
//   },
//   {
//     name: 'Robert',
//     avatar_url:
//       'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
//     subtitle: 'Where does it come from?',
//   },
//   {
//     name: 'downey junior',
//     avatar_url:
//       'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
//     subtitle: 'Where can I get some?',
//   },
//   {
//     name: 'Ema Watson',
//     avatar_url:
//       'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
//     subtitle: 'I am good, how are you?',
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url:
//       'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     subtitle:
//       ' If you use this site regularly and would like to help keep the site',
//   },
//   {
//     name: 'Jenifar Lawrence',
//     avatar_url:
//       'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
//     subtitle: 'Why do we use it?',
//   },
//   {
//     name: 'Tom Holland',
//     avatar_url:
//       'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
//     subtitle:
//       ' If you use this site regularly and would like to help keep the site',
//   },
// ];

export default function DashboardUser({navigation}) {
  const [allUser, setallUser] = useState([]);
  const [allUserBackup, setallUserBackup] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        console.log('all User data: ', Object.values(snapshot.val()));
        setallUser(Object.values(snapshot.val()));
        setallUserBackup(Object.values(snapshot.val()));
      });
  };

  const searchuser = val => {
    setsearch(val);
    setallUser(allUserBackup.filter(it => it.name.match(val)));
  };

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 15,
          backgroundColor: COLORS.primary,
          elevation: 2,
          paddingVertical: 15,
        }}>
        <Text style={styles.logo}>Pacapa</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            source={{
              uri: 'https://ui-avatars.com/api/?name=John+Doe',
            }}
            rounded
            size="small"
          />
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatScreen', {receiverData: item})}>
      <ListItem
        containerStyle={{paddingVertical: 8, marginVertical: 0}}
        bottomDivider>
        <Avatar
          source={{uri: item.avatar}}
          rounded
          title={item.name}
          size="medium"
        />
        <ListItem.Content>
          <ListItem.Title style={{fontFamily: FONTS.Medium, fontSize: 14}}>
            {item.name}
          </ListItem.Title>
          <ListItem.Subtitle
            style={{fontFamily: FONTS.Regular, fontSize: 12}}
            numberOfLines={1}>
            {item.subtitle}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate('SearchUser')}>
        <Icon name="users" style={{color: COLORS.white, fontSize: 20}} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    ...FONTS.h2,
    color: COLORS.white,
  },
  but: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});
