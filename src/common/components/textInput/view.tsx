import React from "react";
import {Text, TextInput, StyleSheet} from "react-native";
import {useTextInputViewModel} from "./view.model";

interface TextInputViewProps {
  props: {
    value: string;
    setValue: (newValue: string) => void;
    label: string;
    placeholder: string;
  };
}
const TextInputView: React.FC<TextInputViewProps> = ({props}) => {
  const {value, setValue, label, placeholder} = useTextInputViewModel({
    props,
  });
  return (
    <>
      <Text style={styles.textLabel}>{label}:</Text>

      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.textInput}
        onChangeText={setValue}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textLabel: {
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    fontSize: 20,
  },
  textInput: {
    backgroundColor: "white",
    color: "black",
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
export default TextInputView;
