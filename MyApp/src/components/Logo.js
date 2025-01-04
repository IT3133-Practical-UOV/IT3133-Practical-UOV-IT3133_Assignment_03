import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Image
      source={require('../../assets/images/logo.png')}
      style={{ width: 305, height: 75, resizeMode: 'contain' }}
      />
    </View>
  )
}