import React from "react";
import {LoadingViewModel} from "./models";

import {useEffect, useRef} from "react";

export const useLoadingViewModel = (): LoadingViewModel => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  return {
    animationRef,
    autoplay: true,
  };
};
