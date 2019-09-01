import React from "react";

const themes = ["light", "dark", "pink"];
const initialState = themes[0];
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [theme, changeTheme] = React.useState(initialState);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {children({
        theme,
        changeTheme
      })}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext, themes };
// export default ThemeProvider;
