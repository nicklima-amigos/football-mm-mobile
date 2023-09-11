import React from "react";
import {View} from "react-native";
import LottieView from "lottie-react-native";
import LoadingLottie from "../../assets/json/loading.json";
import {useLoadingViewModel} from "./view.model";

const LoadingView: React.FC = () => {
  const {autoplay, animationRef} = useLoadingViewModel();
  return (
    <View>
      <LottieView
        autoPlay={autoplay}
        ref={animationRef}
        style={{
          width: 300,
          height: 300,
        }}
        loop
        source={LoadingLottie}
      />
    </View>
  );
};

export default LoadingView;
