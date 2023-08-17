import { createContext, useContext, useState } from "react";
import projectsArray from "../constants/projects.js";

export const AppContext = createContext({});

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState(projectsArray);

  return (
    <AppContext.Provider value={{ projects, setProjects }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;
