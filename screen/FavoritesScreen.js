import { View, Text } from "react-native";
import { useContext } from "react";

import MealList from "../components/MealsList/MealList";

import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  console.log(favoriteMeals);

  return <MealList mealData={favoriteMeals} />;
}
export default FavoritesScreen;
