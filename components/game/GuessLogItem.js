import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View>
      <Text>!라운드 넘버!</Text>
      <Text>!예상한 숫자!</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({});
