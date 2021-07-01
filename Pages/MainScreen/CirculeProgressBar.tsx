import React from "react";
import { View, Dimensions, Animated } from "react-native";
import { interpolate } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
const { Value, multiply } = Animated;
const { width } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;

interface CircularProgressProps {
  progress: typeof Value;
}

export default function CirculeProgressBar({
  progress,
}: CircularProgressProps) {
  const alfa = interpolate(progress, 
    inputRange: [0, 1],
    outange: [0, Math.PI * 2],
  );
  const strokeDashoffset = multiply(alfa, radius);
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="rgba(66,103,178,1)"
        fill={"none"}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circumference} ${circumference}`}
        {...{ strokeWidth }}
      />
    </Svg>
  );
}
