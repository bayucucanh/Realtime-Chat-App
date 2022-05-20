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

export default function DashboardUser() {
  const [allUser, setallUser] = useState([]);
  const [allUserBackup, setallUserBackup] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        console.log('all User data: ', Object.values(snapshot.val()));
      });
  };

  const renderItem = ({item}) => {
    <TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.nameCard}>{item.name}</Text>
      </View>
    </TouchableOpacity>;
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    width: '90%',
    marginLeft: 5,
    backgroundColor: COLORS.white,
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
