import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const useLayout = () => {
  return useContext(LayoutContext);
};

export const LayoutProvider = ({ children }) => {
  const [isLayoutVisible, setIsLayoutVisible] = useState(true);

  return (
    <LayoutContext.Provider value={{ isLayoutVisible, setIsLayoutVisible }}>
      {children}
    </LayoutContext.Provider>
  );
};
