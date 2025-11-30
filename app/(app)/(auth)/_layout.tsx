import { Stack } from "@/components/Stack";
import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import Transition from "react-native-screen-transitions";

const AuthLayout = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/(restaurant)/[id]"
        options={{
          ...Transition.presets.DraggableCard(),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(modal)/map"
        options={{
          ...Transition.presets.SharedAppleMusic(),
        }}
      />
      <Stack.Screen
        name="(modal)/location"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [0.7],
          title: "",
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 20,
                backgroundColor: Colors.light,
              }}
              onPress={() => router.dismiss()}
            >
              <Ionicons name="close-sharp" size={28} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="(modal)/(menu)/[id]"
        options={{
          presentation: "formSheet",
          sheetAllowedDetents: [1],
          title: "",
          sheetCornerRadius: 16,
          sheetGrabberVisible: true,
          headerShadowVisible: false,
          headerShown: false,
          sheetExpandsWhenScrolledToEdge: true,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
