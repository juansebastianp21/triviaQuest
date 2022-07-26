import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193252",
    alignItems: "center",
    justifyContent: "space-around",
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  categoryText: {
    color: "#FFF",
    fontSize: 14,
  },
  questionContainer: {
    width: "90%",
    backgroundColor: "#FFF",
    height: undefined,
    aspectRatio: 1.5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProps: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  infoText: {
    fontSize: 12,
    fontWeight: "600",
    position: "absolute",
    top: 14,
    right: 14,
  },
  questionText: {
    fontSize: 20,
    maxWidth: "90%",
    textAlign: "center",
    fontWeight: "600",
  },
  buttonsContainer: {
    backgroundColor: "#FFF",
    paddingTop: 30,
    borderRadius: 500,
    width: "250%",
    height: undefined,
    aspectRatio: 1,
    alignItems: "center",
    marginBottom: "-170%",
  },
  buttonsTitle: {
    fontSize: 20,
    maxWidth: "90%",
    textAlign: "center",
    fontWeight: "600",
    color: "#a1a4a3",
  },
  buttonContainer: {
    width: width * 0.8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    borderWidth: 2,
    borderColor: "#c8cbca",
    borderRadius: 12,
    marginTop: 20,
  },
});

export default styles;
