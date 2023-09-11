import React from "react";
import {TextInputViewModel} from "./models";

export interface useTextInputViewModelProps {
  props: TextInputViewModel;
}

export const useTextInputViewModel = ({
  props,
}: useTextInputViewModelProps): TextInputViewModel => {
  return {
    value: props.value,
    setValue: props.setValue,
    placeholder: props.placeholder,
    label: props.label,
  };
};
