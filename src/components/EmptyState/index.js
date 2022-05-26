import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../themes';

export default function index({source, message}) {
  return (
    <View style={styles.container}>
      <Image source={source} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SIZES.height / 4,
  },
  message: {...FONTS.body2, color: COLORS.lightGray4, marginTop: 10},
});
