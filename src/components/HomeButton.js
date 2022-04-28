import React, { useRef, useState } from "react";
import { FlatList, View, Icon, StyleSheet } from "react-native";

const HomeButton = () => {
    const listRef = useRef(null);
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0);
    const CONTENT_OFFSET_THRESHOLD = 300;
  
    return (
      <View>
        <FlatList 
          ref={listRef}
          onScroll={event => {
            setContentVerticalOffset(event.nativeEvent.contentOffset.y);
          }}
        />
  
        {contentVerticalOffset > CONTENT_OFFSET_THRESHOLD && (
          <Icon 
            // previously configured Icon props
            containerStyle={styles.scrollTopButton} 
            onPress={() => {
              listRef.current.scrollToOffset({ offset: 0, animated: true });
            }}
          />
        )}   
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    scrollTopButton: {
      position: 'absolute',
      bottom: 0,
      right: 0
    },
  });

  export default HomeButton