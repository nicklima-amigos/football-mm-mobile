import React from "react";
import {TouchableOpacityViewModel} from "./models";

export interface useTouchableOpacityViewModelProps {
  props: TouchableOpacityViewModel;
}

export const useTouchableOpacityViewModel = ({
  props,
}: useTouchableOpacityViewModelProps): TouchableOpacityViewModel => {
  return {
    onPress: props.onPress,
    style: props?.style ? props.style : undefined,
    disabled: props.disabled,
    label: props.label,
  };
};
