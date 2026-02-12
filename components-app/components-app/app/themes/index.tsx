import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text } from "react-native";
import { useColorScheme } from "nativewind";
import { useThemeChargerContext } from "@/presentation/context/ThemedChangerContext";

const ThemesScreen = () => {
  // const { colorScheme, setColorScheme } = useColorScheme();

  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChargerContext();

  const [darkModeSetting, setDarkModeSetting] = useState({
    darkMode: currentTheme == "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();
    setDarkModeSetting({
      darkMode: value,
      systemMode: false,
    });
  };
  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }
    setDarkModeSetting({
      darkMode: darkModeSetting.darkMode,
      systemMode: value,
    });
  };
  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedSwitch
          value={darkModeSetting.darkMode}
          classname="mb-5"
          text="Dark Mode"
          onValueChange={setDarkMode}
        ></ThemedSwitch>
        <ThemedSwitch
          value={darkModeSetting.systemMode}
          text="System Mode"
          onValueChange={setSystemMode}
        ></ThemedSwitch>
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
