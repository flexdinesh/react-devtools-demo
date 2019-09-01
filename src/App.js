import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import LoginFormWithHooks from "./components/LoginForm/LoginFormWithHooks";
import ArticleThemeWrapper from "./components/Article/ArticleWrapper";

function App() {
  return (
    <ThemeProvider>
      {({ theme }) => (
        <>
          <Header />
          <main className={`theme--${theme}`}>
            <LoginFormWithHooks />
            <ArticleThemeWrapper />
          </main>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
