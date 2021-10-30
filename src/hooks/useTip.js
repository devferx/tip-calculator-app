import { useState } from "react";

export const useTip = () => {
  const [state, setState] = useState({
    bill: 0,
    peopleCount: 1,
    tipPercentage: 15,
  });

  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  return { state, updateState };
};
