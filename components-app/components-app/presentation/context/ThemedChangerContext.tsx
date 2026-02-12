import {
  Children,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { colorScheme, useColorScheme } from "nativewind";

interface ThemeChargerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChargerContext = createContext({} as ThemeChargerContextType);

export const useThemeChargerContext = () => {
  const themeChanger = useContext(ThemeChargerContext);
  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSytemThemeEnabled, setIsSytemThemeEnabled] = useState(true);

  const currentTheme = isSytemThemeEnabled
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChargerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSytemThemeEnabled,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSytemThemeEnabled(false);
          },
          setSystemTheme: async () => {
            setIsSytemThemeEnabled(true);
            setColorScheme("system");
          },
        }}
      >
        {children}
      </ThemeChargerContext.Provider>
    </ThemeProvider>
  );
};
