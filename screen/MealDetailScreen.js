import { View, Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.id;
  const mealTitle = route.params.title;
  return (
    <View>
      <Text>{mealId}</Text>
      <Text>{mealTitle}</Text>
    </View>
  );
}

export default MealDetailScreen;
