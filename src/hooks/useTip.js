import { useState } from "react";

const initialState = {
  bill: "",
  peopleCount: 1,
  tipPercentage: 15,
};

export const useTip = () => {
  const [state, setState] = useState(initialState);

  const updateState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const reset = () => {
    setState(initialState);
  };

  return { state, updateState, reset };
};
