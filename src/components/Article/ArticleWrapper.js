import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./index.css";
import Article from "./Article";

function ArticleThemeWrapper() {
  const { theme } = useContext(ThemeContext);
  return <Article theme={theme} />;
}

export default ArticleThemeWrapper;
