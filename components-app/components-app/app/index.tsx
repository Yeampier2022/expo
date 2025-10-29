import { View, Text } from "react-native";
import React from "react";
import { Href, Link } from "expo-router";
import ThemedView from "@/presentation/shared/ThemedView";
import { animationMenuRoutes } from "@/constants/Routes";

const index = () => {
  return (
    <ThemedView margin>
      <Text></Text>

      {animationMenuRoutes.map((route) => (
        <Link href={route.name.split("/")[0] as Href}>{route.title}</Link>
      ))}
    </ThemedView>
  );
};

export default index;
