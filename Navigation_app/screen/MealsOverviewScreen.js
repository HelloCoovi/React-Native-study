import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealList from "../components/MealsList/MealList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  return <MealList mealData={displayedMeals} />;
}

export default MealsOverviewScreen;
