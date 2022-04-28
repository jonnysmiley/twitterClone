import React from "react";
import { DATA } from "../../shared/Data";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";
import LikeButton from "./LikeButton";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

let count = 0;

const Item = ({ title, username, comment, image, avatar, time }) => (
  <>
    <View style={styles.item}>
      <View style={{ flexDirection: "row" }}>
        <View><Image  style={styles.avatar} source={{ uri: avatar }} resizeMode={'cover'} /></View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title2}> @{username}</Text>
            <Text style={styles.title2}> • {time}</Text>
          </View>
          <Text style={{ color: "#fff", marginTop: 15 }}>{comment}</Text>
          {/* <ImageResizer /> */}
          <Image style={styles.images} source={{ uri: image }} resizeMode={'cover'} />
          <View
            style={{
              width: 300,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View><Button type="clear" icon={<Icon name="retweet" size={15} color="white" />} /></View>
            <Button type="clear" icon={<Icon name="comment-o" size={15} color="white" />} />
            <LikeButton />
            <Button type="clear" icon={<Icon name="download" size={15} color="white" />} />
          </View>
        </View>
      </View>
    </View>
  <View style={{ flex: 1, height: 1, backgroundColor: "#4a4a4a" }}></View>
  </>
);

const Flat = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.name}
      username={item.username}
      comment={item.comment}
      image={item.image}
      avatar={item.avatar}
      time={item.time}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: "flex",
    color: "#111",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  title2: {
    fontSize: 20,
    color: "#5c5c5c",
  },
  row: {
    flexDirection: "row",
  },
  images: {
    marginTop: 15,
    borderRadius: 5,
    width: 300,
    height: 200,
  },
  avatar: {
    borderRadius: 50,
    height: 30,
    width: 30,
    marginRight: 10,
    marginTop: 5,
},
});

export default Flat;
