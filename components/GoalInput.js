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
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.cancel} />
          </View>
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
  button: {
    width: "40%",
  },
});
export default GoalInput;
