import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/Header'

export default function TestComponent() {
  return (
    <View>
      <AppHeader 
        title="Pacapa Chat app" iconColor='#fff'
        logo
        back
        // right="search"
        // optionalBtn=""
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>TestComponent</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})