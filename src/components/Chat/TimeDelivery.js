import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const TimeDelivery = () => {
  return (
    <View
      style={[
        styles.mainView,
        {
          justifyContent: 'flex-end',
        },
      ]}>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 7,
          color: '#fff',
        }}>
        {/* {moment(item.sendTime).format('LLL')} */}
        Juni 2023 11:31 WIB
      </Text>
      <Icon
        name={'check-all'}
        style={{
          color: '#000',
          fontSize: 15,
          marginLeft: 5,
        }}
      />
    </View>
  );
};

export default TimeDelivery;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
});
