import { View, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GameOver!</Title>
      <View>
        <Text>!IMAGE HERE!</Text>
      </View>
      <Text>
        당신의 휴대폰은 숫자 X를 예측하기위해 Y 라운드가 필요했습니다.
      </Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
