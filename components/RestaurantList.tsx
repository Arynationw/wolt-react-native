import { Colors } from "@/constants/theme";
import { useRestaurants } from "@/hooks/useRestaurants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function RestaurantList() {
  const { data: restaurants, isLoading, error } = useRestaurants();
  const router = useRouter();
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size={"large"} color={Colors.secondary} />
      </View>
    );
  }
  return (
    <>
      {restaurants?.map((item) => (
        <View key={item.id} className="p-3">
          <TouchableOpacity
            onPress={() => router.push(`/(modal)/(restaurant)/${item.id}`)}
            className="bg-white my-4 rounded-xl overflow-hidden"
            style={{
              boxShadow: "0px 4px 2px -2px rgba(0,0,0,0.2)",
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: Colors.light,
              elevation: 2,
            }}
          >
            <Image source={item.image!} className="w-full h-52" />
            <View className="p-3">
              <Text className=" font-semibold mb-1 text-xl">{item.name}</Text>
              <Text className="text-gray-800" numberOfLines={2}>
                {item.description}
              </Text>
            </View>
            <View style={styles.metadata}>
              <Ionicons name="bicycle-outline" size={16} color={Colors.muted} />
              <Text style={styles.metadataText}>
                €{item.deliveryFee.toFixed(2)}
              </Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.metadataText}>€€€€</Text>
              <Text style={styles.dot}>•</Text>
              <Ionicons name="happy-outline" size={16} color={Colors.muted} />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  metadata: {
    borderTopColor: Colors.light,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    padding: 10,
  },
  metadataText: {
    fontSize: 13,
    color: Colors.muted,
  },
  dot: {
    color: "#999",
    fontSize: 13,
  },
});
