import { View, Text, TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";

interface Props extends TextInputProps {
  className?: string;
}
const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className={`py-4 px-2 text-black dark:text-white${className}`}
      placeholderTextColor={"grey"}
      {...rest}
    ></TextInput>
  );
};

export default ThemedTextInput;
