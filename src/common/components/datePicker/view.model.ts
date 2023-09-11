import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {DatePickerViewModel} from "./models";
import {useState} from "react";

export interface useDateTimePickerViewModelProps {
  props: {
    mode: "date" | "time";
    display: "default" | "spinner" | "calendar";
    date: Date;
    onDateChange: (newDate: Date) => void;
  };
}

export const useDateTimePickerViewModel = ({
  props,
}: useDateTimePickerViewModelProps): DatePickerViewModel => {
  const [date, setDate] = useState<Date>(
    props.date !== undefined ? props.date : new Date(),
  );

  const showMode = (currentMode: "date" | "time") => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (event.type === "set" && selectedDate) {
      setDate(selectedDate);
      props.onDateChange(selectedDate);
    }
  };

  return {
    date,
    setDate,
    onChange,
    display: props.display,
    mode: props.mode,
    onDateChange: props.onDateChange,
    showDatepicker,
  };
};
