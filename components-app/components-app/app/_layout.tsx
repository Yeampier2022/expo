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
import ThemedText from "@/presentation/shared/ThemedText";
import { allRoutes } from "@/constants/Routes";


import '../global.css'
export default function RootLayout() {
  let colorScheme = useColorScheme();
  const backgroundColor = useThemeColor(
    { light: "color-[#49129c]", dark: "indigo" },
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
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route?.name}
              name={route?.name}
              options={{
                title: route?.title,
              }}
            />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
