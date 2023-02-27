import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.id;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Step</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
