import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {ChatHeader, MessageComp} from '../../components/';
import { BackgroundChat } from '../../assets';
import { COLORS } from '../../themes';

export default function ChatScreen() {
  const [message, setmessage] = useState('');

  return (
    <View style={{position: 'relative', flex: 1}}>
      <ChatHeader />
      <ImageBackground
        source={BackgroundChat}
        style={{flex: 1}}>
        <MessageComp />
      </ImageBackground>
      <View style={styles.msgWrapper}>
        <TextInput
          style={styles.msgInput}
          placeholder="type a messages"
          multiline={true}
          onChangeText={text => setmessage(text)}
          value={message}
        />
        <TouchableOpacity>
          <Icon name="send" size={25} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  msgWrapper: {
    backgroundColor: '#0a2141',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    justifyContent: 'space-evenly',
  },
  msgInput: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#fff',
    paddingHorizontal: 15,
    color: '#000',
  },
});
