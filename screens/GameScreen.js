import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return exclude;
  }
}

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>상대방의 예상값</Title>
      {/* 예상값 */}
      <Text>높나요? 낮나요?</Text>
      {/* + 버튼 */}
      {/* - 버튼 */}
      {/*  라운드 수 */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
