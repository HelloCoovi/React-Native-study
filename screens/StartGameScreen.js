import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";

import PrimaryButton from "../components/game/ui/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      console.log("경고! 유효하지 않은 숫자");
      Alert.alert(
        "유효하지 않은 값 입니다!",
        "숫자는 0~99 사이의 숫자만 입력 가능합니다",
        [
          {
            text: "알겠습니다",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    onPickNumber(chosenNumber);
    console.log("유효한 숫자입니다");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary700,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 70,
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent500,
    textAlign: "center",
    fontSize: 32,
    color: Colors.accent500,
    fontWeight: "bold",
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
