/* eslint-disable react-hooks/exhaustive-deps */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

const SearchUser = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [allUser, setAllUser] = useState([]);
  const [allUserBackup, setallUserBackup] = useState([]);

  const user = useSelector(state => state.userData);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    database()
      .ref('/users/')
      .once('value')
      .then(snapshot => {
        console.log('All User data: ', Object.values(snapshot.val()));
        setAllUser(
          Object.values(snapshot.val()).filter(it => it.id != user.id),
        );
        setallUserBackup(
          Object.values(snapshot.val()).filter(it => it.id != user.id),
        );
      });
  };

  const searchUser = val => {
    setSearch(val);
    setAllUser(allUserBackup.filter(it => it.name.match(val)));
  };

  const createChatList = data => {
    database()
      .ref('users/' + user.id + '/' + data.id)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());

        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          const newData = {
            roomId,
            id: user.id,
            name: user.name,
            image: user.image,
            emailId: user.emailId,
            about: user.about,
            lastMessage: '',
          };

          database()
            .ref('users/')
            .update(newData)
            .then(() => console.log('Data updated.'));

          delete data['password'];
          data.lastMessage = '';
          data.roomId = roomId;

          database()
            .ref('users/')
            .update(data)
            .then(() => console.log('Data updated.'));

          navigation.navigate('SingleChat', {receiverData: data});
        } else {
          navigation.navigate('SingleChat', {receiverData: snapshot.val()});
        }
      });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => createChatList(item)}
      style={styles.wrapper}>
      <Image source={{uri: item.image}} style={styles.imageProfile} />
      <View>
        <Text style={styles.nameUser}>{item.name}</Text>
        <Text>{item.about}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text>{search}</Text>
      <SearchBar
        placeholder="Search Contact"
        onChangeText={text => searchUser(text)}
        value={search}
        onPress={event => alert(event)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
      />
    </View>
  );
};

export default SearchUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafe',
  },
  wrapper: {
    marginHorizontal: 12,
    marginTop: 14,
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  imageProfile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  nameUser: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
});
