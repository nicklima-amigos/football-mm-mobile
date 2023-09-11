import React from "react";
import {useDateTimePickerViewModel} from "./view.model";
import {SafeAreaView, Text, StyleSheet} from "react-native";
import TouchableOpacityView from "../touchableOpacity/view";
import {s} from "react-native-wind";

interface DatePickerViewProps {
  props: {
    mode: "date" | "time";
    display: "default" | "spinner" | "calendar";
    date: Date;
    onDateChange: (newDate: Date) => void;
  };
}
const DatePickerView: React.FC<DatePickerViewProps> = ({props}) => {
  const {date, showDatepicker} = useDateTimePickerViewModel({props});

  return (
    <SafeAreaView>
      <TouchableOpacityView
        props={{
          label: "Select your birth Date",
          style: s`bg-black h-10 mt-3  rounded items-center justify-center`,
          onPress: showDatepicker,
        }}
      />
      <Text style={styles.textLabel}>
        birthDate Preview: {date ? date.toLocaleString().split(",")[0] : ""}
      </Text>
    </SafeAreaView>
  );
};

export default DatePickerView;

const styles = StyleSheet.create({
  textLabel: {
    color: "#fff",
    textAlign: "left",
    marginTop: 20,
    fontSize: 20,
  },
});
