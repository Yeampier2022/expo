import { View } from "react-native";
import React from "react";
import ThemedView from "@/presentation/shared/ThemedView";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import "../global.css";
const index = () => {
  return (
    <ThemedView margin>
      <View className="my-5" />

      {animationMenuRoutes.map((route, index) => (
        // <Link href={route.name.split("/")[0] as Href}>{route.title}</Link>

        <MenuItem
          key={route.name}
          isFirst={index == 0}
          isLast={index == animationMenuRoutes.length - 1}
          title={route.title}
          name={route.name}
          icon={route.icon}
        />
      ))}
      <View className="my-5" />

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.name}
          isFirst={index == 0}
          isLast={index == animationMenuRoutes.length - 1}
          title={route.title}
          name={route.name}
          icon={route.icon}
        />
      ))}

      <View className="my-5" />
      {menuRoutes.map((route, index) => (
        <MenuItem
          isFirst={index == 0}
          key={route.name}
          isLast={index == animationMenuRoutes.length - 1}
          title={route.title}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </ThemedView>
  );
};

export default index;
