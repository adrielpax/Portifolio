import React, { createContext, useContext } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface ComponentsContextState {
  warnning: boolean;
  hiddenWarnning: () => void;
}

const GlobalContext = createContext<ComponentsContextState | undefined>(
  undefined
);

export const SiteContextProvider = ({ children }: ContextProps) => {
  const [warnning, setWarnning] = React.useState<boolean>(() => {
    if (typeof localStorage !== "undefined") {
      const storedState = localStorage.getItem("warnning");
      return storedState ? JSON.parse(storedState) :false;
    } else {
      return false;
    }
  });
  const hiddenWarnning = () => {
    return setWarnning(!warnning);
  };
  const values: ComponentsContextState = {
    warnning,
    hiddenWarnning,
  };
  React.useEffect(() => {
    // Atualize o localStorage sempre que o estado mudar
    localStorage.setItem("warnning", JSON.stringify(warnning));
  }, [warnning]);

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
