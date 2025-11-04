import { View, Text, Switch, Pressable, Platform } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { useThemeColor } from "@/hooks/use-theme-color";

interface Props {
  classname?: string;
  text?: string;

  value?: boolean;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";
const ThemedSwitch = ({ classname, value, text, onValueChange }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      className={`flex flex-row items-center justify-between active:opacity-80 ${classname}`}
    >
      {text ? (
        <ThemedText className="" type="h2">
          {text}
        </ThemedText>
      ) : (
        <ThemedText className="" type="h2"></ThemedText>
      )}
      <Switch
        value={value}
        thumbColor={isAndroid ? switchActiveColor : ""}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
        onValueChange={onValueChange}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
