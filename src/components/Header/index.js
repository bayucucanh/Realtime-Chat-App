import { BackHandler, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';
import Icon from 'react-native-ionicons'

export default function Header() {

//   const openMenu = 

  return (
    <View style={styles.header}>
      <Icon name='arrow-back' size={28} 
            onPress={() => BackHandler.exitApp()
                } 
            style={styles.icon} />
      <View>
        <Text style={styles.headerText}>Pacapa Chat app</Text>
      </View>
    </View>
  )
}

