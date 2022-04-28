import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Notifications({navigation}) {

  const [username, setUsername] = useState ('abc')

  return (
    <View style = {styles.container}>
      <Text>Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})