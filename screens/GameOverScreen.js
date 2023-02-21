import { View, Text, StyleSheet, Image } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";

function GameOverScreen() {
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
        당신의 휴대폰은 숫자 <Text style={styles.highlight}>X</Text>를
        예측하기위해 <Text style={styles.highlight}>Y</Text> 라운드가
        필요했습니다.
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
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
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
