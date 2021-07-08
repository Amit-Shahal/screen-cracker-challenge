import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { DeviceMotion } from "expo-sensors";
interface AccelertionData {
  x: number;
  y: number;
  z: number;
}
export default function DeviceMotionControl() {
  const [accelertionData, setAccelertionData] = useState<AccelertionData>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await DeviceMotion.isAvailableAsync();
      setHasPermission(status);
      DeviceMotion.setUpdateInterval(1000);
    })();
  }, []);

  if (hasPermission === false) {
    Alert.alert("No access to accelerometer");
  }

  DeviceMotion.addListener((diviceMotionData) => {
    setAccelertionData(diviceMotionData.acceleration as AccelertionData);
  });
  const { x, y, z } = accelertionData;
  return (
    <View>
      <Text>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
    </View>
  );
}

function round(n: number) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}
