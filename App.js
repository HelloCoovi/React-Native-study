import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            margin: 16,
            padding: 16,
            borderWidth: 2,
            borderColor: "red",
          }}
        >
          This is Inline styling
        </Text>
      </View>
      <Text style={styles.myText}>This is StyleSheet styling</Text>
      <Button title="눌러주세요!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  myText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "blue",
  },
});
