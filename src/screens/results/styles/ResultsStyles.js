import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193252",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight + 20,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  listContainer: {
    marginHorizontal: 20,
    overflow: "visible",
  },
  iconContainer: {
    backgroundColor: "#FFF",
    borderRadius: 40,
    padding: 4,
    marginRight: 22,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 16,
  },
  itemText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
    maxWidth: "95%",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 60,
  },
});

export default styles;
