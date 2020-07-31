import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setAllGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={allGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={() => console.log("Pressed ")}
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
