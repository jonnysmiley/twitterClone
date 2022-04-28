import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Example({navigation}) {

  const [username, setUsername] = useState ('abc')

  return (
    <View style = {styles.container}>
      <Text>Example</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})