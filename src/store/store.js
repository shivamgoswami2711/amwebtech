import { useContext, useReducer, createContext } from "react";

export const StateContext = createContext();
export const StateProvider = ({ reducer, init, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, init)}>
      {children}
    </StateContext.Provider>
  );
};

const useStateValue = () => useContext(StateContext);

export default useStateValue;
