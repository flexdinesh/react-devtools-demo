import React, { Suspense, lazy } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

import Header from "./components/Header";
import LoginFormWithHooks from "./components/LoginForm/LoginFormWithHooks";

const ArticleThemeWrapper = lazy(() =>
  import("./components/Article/ArticleWrapper")
);

function App() {
  return (
    <ThemeProvider>
      {({ theme }) => (
        <>
          <Header />
          <main className={`theme--${theme}`}>
            <LoginFormWithHooks />
            <Suspense key={"suspense"} fallback={<div>Loading...</div>}>
              <ArticleThemeWrapper />
            </Suspense>
          </main>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
