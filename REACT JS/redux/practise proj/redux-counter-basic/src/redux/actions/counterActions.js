// constants to be used
export const INCREAMENT = "INCREAMENT";
export const DECREAMENT = "DECREAMENT";
export const RESET = "RESET";

// Action creators
export const increament = () => {
  return {
    type: INCREAMENT,
  };
};

export const decreament = () => {
  return {
    type: DECREAMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
