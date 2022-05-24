import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../themes';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen() {
  return (
    <View style={{backgroundColor: '#1686ED', flex: 1}}>
      <View
        style={{
          backgroundColor: '#1686ED',
          width: 393,
          height: 200,
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Image
          style={{
            width: 120,
            height: 120,
            marginTop: 20,
            marginLeft: 15,
            alignSelf: 'center',
          }}
          source={{
            uri: 'https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg',
          }}
        />
        <View style={{alignSelf: 'center', marginTop: -30, marginLeft: 90}}>
          <Ionicons name="camera" size={50} color={'lightgrey'} />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: SIZES.h2,
            lineHeight: 30,
            textAlign: 'center',
          }}>
          Nama Pengguna
        </Text>
        <View style={{marginLeft: 295, marginTop: -25}}>
          <Ionicons name="create-outline" size={20} color={'black'} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 380,
          height: 60,
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 40,
          borderRadius: 10,
        }}>
        <Ionicons name="alert-circle-outline" size={20} color={'black'} />
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: SIZES.body2,
              lineHeight: 22,
              marginLeft: 5,
            }}>
            Bio
          </Text>
          <Text style={{marginLeft: 5}}>Bio Pengguna bebas diisi apa saja</Text>
          <View style={{marginLeft: 340, marginTop: -5}}>
            <Ionicons name="create-outline" size={20} color={'black'} />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 380,
          height: 60,
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 20,
          marginLeft: 5,
          borderRadius: 10,
        }}>
        <Ionicons name="mail-outline" size={20} color={'black'} />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: SIZES.body3,
            lineHeight: 22,
            marginLeft: 5,
          }}>
          Email : Email Pengguna
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
