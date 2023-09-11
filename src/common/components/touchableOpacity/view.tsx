import React from "react";
import {Text, StyleSheet, TouchableOpacity} from "react-native";
import {
  useTouchableOpacityViewModel,
  useTouchableOpacityViewModelProps,
} from "./view.model";

const TouchableOpacityView = ({props}: useTouchableOpacityViewModelProps) => {
  const {label, onPress, disabled, style} = useTouchableOpacityViewModel({
    props,
  });
  return (
    <>
      <TouchableOpacity
        style={style ? style : styles.buttonContainer}
        disabled={disabled}
        onPress={onPress}>
        <Text style={styles.textButton}>{label}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 35,
    marginBottom: 10,
  },
  textButton: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
export default TouchableOpacityView;
