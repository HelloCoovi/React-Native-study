import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
