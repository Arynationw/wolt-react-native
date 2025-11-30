import AppleAuthButton from "@/components/auth/AppleAuthButton";
import GoogleAuthButton from "@/components/auth/GoogleAuthButton";
import { Colors, Fonts } from "@/constants/theme";
import useUserStore from "@/hooks/useUserStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Page() {
  const router = useRouter();
  const { setIsGuest } = useUserStore();
  return (
    <View className="p-5 bg-white h-screen">
      <View className="flex items-end ">
        <TouchableOpacity
          onPress={() => router.dismiss()}
          className="size-12 rounded-full bg-slate-200 flex items-center justify-center"
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text
        style={{ fontFamily: Fonts.brandBlack }}
        className="text-4xl font-bold my-6"
      >
        Log in or create a Wolt account
      </Text>
      <View>
        <Animated.View entering={FadeInDown.delay(100)} className="my-3">
          <AppleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)} className="my-3">
          <GoogleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300)}>
          <TouchableOpacity
            style={styles.otherButton}
            onPress={() => router.push("/(app)/(public)/other-options")}
            className=""
          >
            <Ionicons name="logo-facebook" size={24} color="black" />
            <Text style={styles.otherButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400)} className={"my-5"}>
          <Text
            className="text-center text-[#4285F4] text-xl"
            style={{ fontFamily: Fonts.brandBold }}
            onPress={() => setIsGuest(true)}
          >
            Continue as guest
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  otherButton: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: Colors.muted,
    fontWeight: "600",
    fontSize: 18,
  },
});
