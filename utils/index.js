import { createContext, useContext, useState } from "react";

const Web3Context = createContext({
  isWhitelisted: null,
  setWhitelisted: null,
});

export const Web3ContextProvider = ({ children }) => {
  const [isWhitelisted, setWhitelisted] = useState(false);

  return (
    <Web3Context.Provider value={{ isWhitelisted, setWhitelisted }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  const { isWhitelisted, setWhitelisted } = useContext(Web3Context);
  return { isWhitelisted, setWhitelisted };
};
