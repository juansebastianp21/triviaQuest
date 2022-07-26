import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193252",
    alignItems: "center",
    paddingTop: 60,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  image: {
    width: "70%",
    height: undefined,
    aspectRatio: 2,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  heading: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
    maxWidth: "60%",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: "80%",
    paddingVertical: 20,
    backgroundColor: "#E95446",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  loading: {
    marginRight: 10,
  },
});

export default styles;
