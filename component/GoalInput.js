import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="이곳에 나의 목표를 적으세요!"
      />
      <Button onPress={addGoalHandler} title="목표 만들기" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default GoalInput;
