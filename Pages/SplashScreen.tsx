import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";

import { styles } from "../Styles/SplashScreenStyles";

//#
//type checking by react navigation typescript
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
type RootStackParamList = {
  MainScreen: undefined;
};
type SplashScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MainScreen"
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "MainScreen">;

type Props = {
  navigation: SplashScreenScreenNavigationProp;
  route: ProfileScreenRouteProp;
};
//#end

//entery screen
export default function SplashScreen({ route, navigation }: Props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(66,103,178,1)", "transparent"]}
        style={styles.background}>
        <Text style={styles.header} adjustsFontSizeToFit numberOfLines={1}>
          Screen Cracker Challenge
        </Text>
        <View style={styles.txtContainer}>
          <View style={styles.line1View}>
            <Text
              style={styles.smallTxt}
              adjustsFontSizeToFit
              numberOfLines={1}>
              throw your
            </Text>
            <Animatable.Text
              animation="zoomInLeft"
              // delay={500}
              duration={1500}
              style={styles.bigTxt}
              adjustsFontSizeToFit
              numberOfLines={1}>
              PHONE
            </Animatable.Text>
          </View>
          <View style={styles.line2View}>
            <Animatable.Text
              animation="zoomInRight"
              delay={1000}
              duration={1500}
              style={styles.bigTxt}
              adjustsFontSizeToFit
              numberOfLines={1}>
              SHARE
            </Animatable.Text>
            <Text
              style={styles.smallTxt}
              adjustsFontSizeToFit
              numberOfLines={1}>
              with your
            </Text>
            <Animatable.Text
              animation="zoomInRight"
              delay={2000}
              duration={1500}
              style={styles.bigTxt}
              adjustsFontSizeToFit
              numberOfLines={1}>
              FRIENDS
            </Animatable.Text>
          </View>
        </View>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.buttonContainer}>
          <Icon
            reverse
            raised
            name="angle-double-down"
            type="font-awesome"
            color="rgba(66,103,178,0.6)"
            onPress={() => navigation.navigate("MainScreen")}
          />
        </Animatable.View>
      </LinearGradient>
    </View>
  );
}
