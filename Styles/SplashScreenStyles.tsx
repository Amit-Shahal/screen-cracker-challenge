import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    paddingTop: StatusBar.currentHeight || 42,
  },
  smallTxt: {
    fontSize: 100,
    fontWeight: "200",
  },
  bigTxt: {
    fontSize: 100,
    fontWeight: "bold",
    color: "white",
  },
  txtContainer: {
    flex: 3,
    paddingHorizontal: "2.5%",
    width: "100%",
    alignSelf: "center",
    justifyContent: "flex-start",
  },
  line1View: {
    alignSelf: "flex-start",
    width: "50%",
  },
  line2View: {
    alignSelf: "flex-end",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight || 42,
  },
  header: {
    width: "95%",
    marginLeft: "2.5%",
    fontSize: 100,
    flex: 1,
    fontWeight: "200",
  },
});
