import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS} from '../../themes';
import database from '@react-native-firebase/database';
import uuid from 'react-native-uuid';
import { SearchBar } from '@rneui/base';

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

  const createChatList = data => {
    database()
      .ref('/chatlist/' + userData.id + '/' + data.id)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());

        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          let myData = {
            roomId,
            id: userData.id,
            name: userData.name,
            emailId: userData.emailId,
            lastMsg: '',
          };
          database()
            .ref('/chatlist/' + data.id + '/' + userData.id)
            .update(myData)
            .then(() => console.log('Data updated.'));

          delete data['password'];
          data.lastMsg = '';
          data.roomId = roomId;
          database()
            .ref('/chatlist/' + userData.id + '/' + data.id)
            .update(data)
            .then(() => console.log('Data updated.'));

          navigation.navigate('ChatScreen', {
            receiverData: data,
            userData: userData,
          });
        } else {
          navigation.navigate('ChatScreen', {
            receiverData: snapshot.val(),
            userData: userData,
          });
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <SearchBar
        placeholder="Search by name..."
        onChangeText={val => searchuser(val)}
        value={search}
        containerStyle={styles.searchContainer}
        inputStyle={styles.searchInput}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View style={styles.card}>
                <Text style={styles.nameCard}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '90%',
    marginLeft: 5,
    backgroundColor: COLORS.success,
    borderColor: COLORS.green,
    borderRadius: 10,
    justifyContent: 'center',
    height: 50,
    borderWidth: 2,
    marginTop: 10,
  },
  nameCard: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
