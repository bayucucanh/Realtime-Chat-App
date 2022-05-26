/* eslint-disable react-native/no-inline-styles */
import database from '@react-native-firebase/database';
import {Avatar, ListItem} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {SkeletonList} from '../../components';
import {COLORS, FONTS} from '../../themes';

export default function DashboardUser({navigation}) {
  const [allUser, setallUser] = useState([]);
  const [loading, setloading] = useState(false);

  const userProfile = useSelector(state => state.UserReducer.userData);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    setloading(true);
    database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        console.log('all User data: ', Object.values(snapshot.val()));
        setallUser(Object.values(snapshot.val()));
        setloading(false);
      });
  };

  const Header = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.logo}>Pacapa</Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <Avatar
            source={{
              uri: userProfile.avatar,
            }}
            rounded
            size="small"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ChatScreen', {receiverData: item})}>
      {loading ? (
        <SkeletonList />
      ) : (
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
      )}
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
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.primary,
    elevation: 2,
    paddingVertical: 15,
  },
});
