import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  localStorage.setItem("isDark", isDark);
  document.body.classList.toggle(isDark ? "dark" : "light");

  console.log(document.body.classList);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
