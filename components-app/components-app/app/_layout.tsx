import { Text, View } from "react-native";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedView from "@/presentation/shared/ThemedView";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useColorScheme } from "react-native";

export default function RootLayout() {
  let colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: "red", dark: "indigo" },
    "background"
  );
  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className="mt-10 text-3xl text-light-text dark:text-dark-text">
            Hola
          </Text>
        </ThemedView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
