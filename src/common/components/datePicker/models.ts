import {DateTimePickerEvent} from "@react-native-community/datetimepicker";

export interface DatePickerViewModel {
  mode: "date" | "time";
  display: "default" | "spinner" | "calendar";
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  showDatepicker: () => void;
  onChange?: (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => void;
  onDateChange: (newDate: Date) => void;
}
