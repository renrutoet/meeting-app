import { createContext } from "react";

interface AvaliabilityStateType {
  dates: string[];
}

export type AvaliabilityReducerActions = "ADD_DATES" | "REMOVE_DATE";

export const initialAvaliablilty: Record<string, any>[] = [];

export const avaliabilityReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATES": {
      return [...state, action.payload];
    }
    case "REMOVE_DATE": {
      console.log(action.payload);
      const temp = [...state];
      temp.splice(action.payload, 1);
      return temp;
    }
    default: {
      throw Error("Unknown Action: " + action.type);
    }
  }
};

export const AvaliabilityContext = createContext<
  AvaliabilityStateType[] | null
>(null);
export const AvaliabilityDispatchContext = createContext<any | null>(null);
