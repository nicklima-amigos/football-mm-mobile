export interface TextInputViewModel {
  value: string;
  setValue: (newValue: string) => void;
  label: string;
  placeholder: string;
}
