import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const LikeButton = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={{flexDirection: "row"}}>
      <Button
        onPress={() => setCount(count + 1)}
        type="clear"
        icon={<Icon name="heart-o" size={15} color="white" />}
      />
      <Text style={styles.textWhite}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textWhite: { 
      marginTop: 7,
      color: "white"
   },
});

export default LikeButton;
