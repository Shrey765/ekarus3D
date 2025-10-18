import React, { useState, createContext, useContext } from 'react';

const ConfigContext = createContext();

const defaultConfig = {
  layout: "layout-1",
  typography: {
    fontFamily: "font-sans", 
    fontWeight: "font-normal", 
    fontSize: 16, 
  },
  button: {
    borderRadius: 8, 
    shadow: "shadow-md",
    alignment: "justify-start",
    backgroundColor: "#7B61FF",
    textColor: "#FFFFFF",
  },
  gallery: {
    alignment: "items-start", 
    spacing: 16, 
    borderRadius: 4, 
  },
  general: {
    cardBorderRadius: 12, 
    containerPadding: 24, 
    sectionBackgroundColor: "#FFFFFF",
  },
  stroke: {
    color: "#E0E0E0",
    weight: 1, 
  },
};

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);

  const updateConfig = (section, property, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [section]: {
        ...prevConfig[section],
        [property]: value,
      },
    }));
  };
  
  const value = { config, setConfig, updateConfig };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);