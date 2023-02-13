import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./component/GoalItem";
import GoalInput from "./component/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => {
      return [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ];
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
