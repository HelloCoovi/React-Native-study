import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen({ userNumber, roundNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GameOver!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        당신의 휴대폰은 숫자 <Text style={styles.highlight}>{userNumber}</Text>
        를 예측하기위해 <Text style={styles.highlight}>{roundNumber}</Text>{" "}
        라운드가 필요했습니다.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>
        새로운 게임 시작하기
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    overflow: "hidden",
    borderColor: Colors.primary800,
    borderWidth: 3,
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
