import React, { createContext, useContext } from "react";

interface ContextProps {
  children: React.ReactNode;
}

interface ComponentsContextState {
  warning: boolean;
  hiddenWarnning: () => void;
}

const GlobalContext = createContext<ComponentsContextState | undefined>(
  undefined
);

export const SiteContextProvider = ({ children }: ContextProps) => {
  const [warning, setWarnning] = React.useState<boolean>(() => {
    if (typeof localStorage !== "undefined") {
      const storedState = localStorage.getItem("warning");
      return storedState ? JSON.parse(storedState) :false;
    } else {
      return false;
    }
  });
  const hiddenWarnning = () => {
    return setWarnning(!warning);
  };
  const values: ComponentsContextState = {
    warning,
    hiddenWarnning,
  };
  React.useEffect(() => {
    // Atualize o localStorage sempre que o estado mudar
    localStorage.setItem("warning", JSON.stringify(warning));
  }, [warning]);

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useMyContext must be used within MyContextProvider");
  }
  return context;
};
