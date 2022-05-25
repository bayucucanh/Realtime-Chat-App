import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SearchBar} from '@rneui/base';
import {COLORS} from '../../themes';
import React, {useState, useEffect} from 'react';
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';

const AllUser = props => {
  const {userData} = props.route.params;
  const [search, setSearch] = useState('');
  const [allUser, setAllUser] = useState([]);
  const [allUserBackUp, setAllUserBackUp] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    database()
      .ref('users')
      .once('value')
      .then(snapshot => {
        console.log('All User data: ', Object.values(snapshot.val()));
        setAllUser(Object.values(snapshot.val()));
        setAllUserBackUp(Object.values(snapshot.val()));
      });
  };

  const searchuser = val => {
    setSearch(val);
    setAllUser(allUserBackUp.filter(it => it.name === val));
  };

  const createChatList = data => {
      console.log('Data', data);
    database()
      .ref('/chatlist/' + userData.id + '/' + data.id)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());

        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          const newData = {
            roomId,
            id: userData.id,
            name: userData.name,
            avatar: userData.avatar,
            emailId: userData.emailId,
            bio: userData.bio,
            lastMessage: '',
          };

          database()
            .ref('/chatlist/' + data.id + '/' + userData.id)
            .update(newData)
            .then(() => console.log('Data updated.'));

          delete data['password'];
          data.lastMessage = '';
          data.roomId = roomId;

          database()
            .ref('/chatlist/' + userData.id + '/' + data.id)
            .update(data)
            .then(() => console.log('Data updated.'));

          navigation.navigate('Chat', {receiverData: data});
        } else {
          navigation.navigate('Chat', {receiverData: snapshot.val()});
        }
      });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.listUser} onPress={()=> createChatList(item)}>
      <Image
        source={{
          uri: item.avatar,
        }}
        style={styles.avatar}
      />
      <View style={styles.infoUser}>
        <Text style={styles.nameContact}> {item.name} </Text>
        <Text style={styles.textMassage}> {item.bio} </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <SearchBar
        placeholder="Search by Name"
        containerStyle={styles.searchContainer}
        onChangeText={val => searchuser(val)}
        value={search}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
        // renderItem={({item}) => {
        //   return (
        //     <TouchableOpacity style={styles.listUser}>
        //       <Image
        //         source={{
        //           uri: item.avatar,
        //         }}
        //         style={styles.avatar}
        //       />
        //       <View style={styles.infoUser}>
        //         <Text style={styles.nameContact}> {item.name} </Text>
        //         <Text style={styles.textMassage}> {item.bio} </Text>
        //       </View>
        //     </TouchableOpacity>
        //   );
        // }}
      />
    </View>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLORS.secondary,
  },
  listUser: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: COLORS.lightGray2,
  },
  infoUser: {
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  nameContact: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  textMassage: {
    fontSize: 13,
  },
});
