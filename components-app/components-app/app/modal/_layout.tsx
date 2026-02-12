import { Stack } from "expo-router";
import React from "react";

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-windows"
        options={{
          presentation: "modal",
        }}
      />
        <Stack.Screen
        name="modal-windows2"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
    
  );
};

export default ModalLayout;
