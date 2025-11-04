import { View, Text, Switch, Pressable } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

interface Props {
  classname?: string;
  text?: string;

  value?: boolean;
  onValueChange: (value: boolean) => void;
}

const ThemedSwitch = ({ classname, value, text, onValueChange }: Props) => {
  return (
    <Pressable
      className={`flex flex-row items-center justify-between active:opacity-80 ${classname}`}
    >
      {text && (
        <ThemedText className="" type="h2">
          {text}
        </ThemedText>
      )}
      <Switch value={value} onValueChange={onValueChange} />
    </Pressable>
  );
};

export default ThemedSwitch;
