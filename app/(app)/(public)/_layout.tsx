import { Stack } from "expo-router";
import React from "react";
import { Platform } from "react-native";
export default function PublicLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="other-options"
        options={{
          headerShown: false,
          presentation: Platform.OS === "ios" ? "formSheet" : "modal",
          title: "",
          sheetCornerRadius: 16,
          headerShadowVisible: false,
          ...(Platform.OS === "ios" && {
            sheetAllowedDetents: [0.6],
          }),
        }}
      />
    </Stack>
  );
}
