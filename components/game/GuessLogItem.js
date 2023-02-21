import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View>
      <Text>#{roundNumber}</Text>
      <Text>휴대폰의 예상값: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({});
