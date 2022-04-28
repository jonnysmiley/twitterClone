import React, { useState } from "react";
import { Image } from "react-native";
import { DATA } from "../../shared/Data";

function ImageResizer() {
  if(item.image) {
            <Image style={styles.images} source={{ uri: image }} resizeMode={'cover'} /> 
  } else {
        <Image style={styles.images3} source={{ uri: image }} resizeMode={'cover'} />
  }
};

const Flat = () => {
    const renderItem = ({ item }) => (
      <Item
        title={item.name}
        username={item.username}
        comment={item.comment}
        image={item.image}
        avatar={item.avatar}
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


export default ImageResizer;