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
            marginTop: 50,
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
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 380,
          height: 60,
          alignSelf: 'center',
          marginTop: 40,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: SIZES.body4,
            lineHeight: 22,
            marginLeft: 5,
            marginTop: 3,
          }}>
          Nama
        </Text>
        <View>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Poppins-Regular',
              fontSize: SIZES.body3,
              lineHeight: 22,
            }}>
            Nama Pengguna
          </Text>
          <View style={{marginLeft: 345, marginTop: -34}}>
            <Ionicons name="create-outline" size={30} color={'black'} />
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
          borderRadius: 10,
        }}>
        <View style={{marginLeft: 5, marginTop: 3}}>
          <Ionicons name="alert-circle-outline" size={20} color={'black'} />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: SIZES.body4,
            lineHeight: 22,
            marginLeft: 3,
            marginTop: 3,
          }}>
          Bio
        </Text>
        <View style={{marginTop: 25, marginLeft: -50}}>
          <Text
            style={{
              fontFamily: 'Poppins-regular',
              fontSize: SIZES.body3,
              lineHeight: 22,
              marginLeft: 3,
              marginTop: 3,
            }}>
            Biodata Pengguna Diisi Bebas
          </Text>
          <View style={{marginLeft: 345, marginTop: -37}}>
            <Ionicons name="create-outline" size={30} color={'black'} />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          width: 380,
          height: 60,
          alignSelf: 'center',
          marginTop: 20,
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <View style={{marginLeft: 5, marginTop: 3}}>
          <Ionicons name="mail-outline" size={20} color={'black'} />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: SIZES.body4,
              lineHeight: 22,
              marginLeft: 3,
              marginTop: 3,
            }}>
            Email
          </Text>
        </View>
        <View style={{marginTop: 25, marginLeft: -70}}>
          <Text> Email Pengguna</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
