import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setAllGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);

    setIsAdd(false);
  };

  const removeGoalHandler = (goalID) => {
    setAllGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    });
  };

  const cancelGoal = () => {
    setIsAdd(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAdd(true)} />
      <GoalInput visible={isAdd} addGoal={addGoalHandler} cancel={cancelGoal} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
