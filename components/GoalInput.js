import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");

  const goalInputHandler = (enteredTxt) => {
    setGoal(enteredTxt);
  };

  const addGoalHandler = () => {
    props.addGoal(goal);
    setGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />

        <View style={styles.buttonStyle}>
          <Button title="Add" onPress={addGoalHandler} />
          <Button title="Cancel" color="red" onPress={props.cancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
export default GoalInput;
