import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CameraComponent from "./CameraComponent";
import CirculeProgressBar from "./CirculeProgressBar";
export default function MainScreen() {
  return (
    <View style={styles.container}>
      {/* <CameraComponent /> */}
      <CirculeProgressBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
  },
});
