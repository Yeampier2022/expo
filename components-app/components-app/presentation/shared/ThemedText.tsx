import React from "react";
import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semi-bold" | "link";
}
const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
      style={{ textDecorationLine: "none" }}
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "font-normal" : "underline",
        type === "h1" ? "text-3xl" : "underline",
        type === "h2" ? "text-xl" : "underline",
        className
      ].join(" ")}
      {...rest}
    ></Text>
  );
};

export default ThemedText;
