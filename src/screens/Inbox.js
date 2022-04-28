import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PersonalMessages from '../components/CommentsFlatlist'

export default function Inbox({navigation}) {

  const [username, setUsername] = useState ('abc')

  return (
    <View style = {styles.container}>
      <PersonalMessages />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})