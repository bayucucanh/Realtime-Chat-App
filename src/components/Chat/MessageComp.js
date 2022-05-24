import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import TimeDelivery from './TimeDelivery';

const MessageComp = () => {
  return (
    <TouchableOpacity style={{marginVertical: 0}}>
      <View style={[(styles.triangleCSS, styles.right)]} />
      <View
        style={[
          styles.msgBox,
          {
            alignSelf: 'flex-end',
            // borderWidth:1,
            backgroundColor: '#0a2141',
          },
        ]}>
        <Text style={{color: '#fff', fontSize: 13}}>Apa kaps zelenzky?</Text>
        <TimeDelivery />
      </View>
    </TouchableOpacity>
  );
};

export default MessageComp;

const styles = StyleSheet.create({
  msgBox: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    minWidth: 80,
    maxWidth: '80%',
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingTop: 5,
    borderRadius: 8,
  },
  triangleCSS: {
    position: 'absolute',
    // top: -3,
    width: 0,
    height: 0,
    // borderBottomLeftRadius:5,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 5,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    right: 2,
    // top:0,
    bottom: 5,
    transform: [{rotate: '103deg'}],
  },
  left: {
    borderBottomColor: '#fff',
    left: 2,
    bottom: 10,
    transform: [{rotate: '0deg'}],
  },
  right: {
    borderBottomColor: '#0a2141',
    right: 2,
    // top:0,
    bottom: 5,
    transform: [{rotate: '103deg'}],
  },
});
