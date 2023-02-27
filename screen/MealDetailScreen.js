import { View, Text, Image, StyleSheet } from "react-native";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.id;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
      />
      <Text>ingredients</Text>
      {selectMeal.ingredients.map((ingredient, i) => {
        return <Text key={i}>- {ingredient}</Text>;
      })}
      <Text>Step</Text>
      {selectMeal.steps.map((step, i) => {
        return (
          <Text key={i}>
            {i + 1}. {step}
          </Text>
        );
      })}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
