import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.object3}>
      <Button
        type="clear"
        icon={<Icon name="star" size={25} color="white" />}
        onPress={toggleModal}
      />

      <Modal style={styles.modal} isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ alignItems: "center" }}>
              <Icon name="star" size={45} color="white" />
            </View>
            <View>
              <Text style={styles.modalText}>
                Home shows you top tweets first
              </Text>
              <Text stlye={styles.smallModalText}>
                See latest tweets instead
              </Text>
              <Text stlye={styles.smallModalText2}>
                view content prefrences
              </Text>
            </View>
          </View>

          <Button type="outline" title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    borderRadius: 15,
    flex: 1,
    marginTop: 620,
    backgroundColor: "black",
    paddingTop: 20,
  },
  modalText: {
    fontSize: 25,
    color: "white",
  },
  smallModalText: {
    fontSize: 30,
    color: "gray",
  },
  object3: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModalTester;
