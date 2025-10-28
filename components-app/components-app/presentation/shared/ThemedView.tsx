import { View, Text, ViewProps } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgcolor?: string;
}
const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgcolor,
  children,
}: Props) => {
  const backgroundColor = bgcolor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
      ]}
      // className="bg-light-background dark:bg-dark-background"
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
