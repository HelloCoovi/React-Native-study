import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="이곳에 나의 목표를 적으세요!"
        />
        <Button title="목표 만들기" />
      </View>
      <View>
        <Text>나의 목표들...</Text>
      </View> */}

      <View
        style={{
          width: "100%",
          height: "98%",
          borderWidth: 3,
          borderColor: "black",
        }}
      >
        <View style={{ flex: 1, backgroundColor: "#AEE2FF" }}>
          <Text style={styles.textStyle}>box1</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#F48484" }}>
          <Text style={styles.textStyle}>box2</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#F9F54B" }}>
          <Text style={styles.textStyle}>box3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // textInput: {
  //   borderWidth: 1,
  //   borderColor: "#cccccc",
  //   width: "80%",
  //   marginRight: 8,
  //   padding: 8,
  // },
  textStyle: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
