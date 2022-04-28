import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import ModalTester from "../components/Modal";
import Flat from "../components/Flatlist";
import React from "react";
import HomeButton from "../components/HomeButton";
import Inbox from "./Inbox";

export default function Home({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Search')
  }
  const pressHandler1 = () => {
    navigation.navigate('Home')
  }
  const pressHandler2 = () => {
    navigation.navigate('Notifications')
  }
  const pressHandler3 = () => {
    navigation.navigate('Inbox')
  }

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={styles.object}>
            <Image source={{ uri: "../images/guts.jpg" }} />
          </View>

          <View style={styles.object2}>
            <Text style={{ color: "#fff", marginLeft: 15, fontSize: 20 }}>
              Home
            </Text>
          </View>
        </View>
        <View style={styles.object3}>
          <View>
            <ModalTester />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column", flex: "1" }}>
        <Flat />
      </View>
      <View style={styles.object6}>
        <View>
          <HomeButton />
          <Button
            type="clear"
            icon={<Icon name="home" size={30} color="white" />}
            onPress={pressHandler1}
          />
        </View>
        <View>
          <Button
            type="clear"
            icon={<Icon name="search" size={30} color="white" />}
            onPress={pressHandler}
          />
        </View>
        <View>
          <Button
            type="clear"
            icon={<Icon name="bell" size={30} color="white" />}
            onPress={pressHandler2}
          />
        </View>
        <View>
          <Button
            type="clear"
            icon={<Icon name="inbox" size={30} color="white" />}
            onPress={pressHandler3}
          />
        </View>
      </View>
    </>
  );
}

{
  /* let APIKEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=7a8f9d22&t=' */
}

const styles = StyleSheet.create({
  object: {
    flexDirection: "row",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "white",
  },
  object2: {
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  object3: {
    justifyContent: "center",
    alignItems: "center",
  },
  object4: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  object5: {
    color: "white",
    marginTop: 20,
  },
  object6: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
  },
});
