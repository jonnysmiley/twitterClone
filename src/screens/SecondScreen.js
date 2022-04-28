import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Flat from '../components/Flatlist'

export default function SecondScreen({navigation}) {

  const [username, setUsername] = useState ('abc')

  return (
    <View style = {styles.container}>
      <Text>Second Screen</Text>
      <Flat />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})