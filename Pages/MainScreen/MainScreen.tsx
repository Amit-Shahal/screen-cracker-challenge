import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CameraComponent from "./Componenets/CameraComponent";
import CirculeProgressBar from "./Componenets/CirculeProgressBar";
import DeviceMotionControl from "../../Utils/DeviceMotionControl";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgb(66,103,178)"]}
        style={styles.background}>
        <View style={styles.cameraView}>
          {/* <CameraComponent /> */}
          <DeviceMotionControl />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  cameraView: {
    // flex: 1,
    width: "90%",
    height: "90%",
  },
});
